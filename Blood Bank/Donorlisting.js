
    // Sample dummy data — replace with real backend data in production
    const donors = [
      {id:1,name:'Rahul Mehra',age:28,blood:'A+',city:'Mumbai',type:'Living',available:true,medical:'No chronic illness. Non-smoker. Previous surgery: None'},
      {id:2,name:'Anita Kapoor',age:45,blood:'O-',city:'Delhi',type:'After Death',available:false,medical:'History of hypertension controlled with medication'},
      {id:3,name:'Vikram Singh',age:34,blood:'B+',city:'Bengaluru',type:'Living',available:true,medical:'Diabetes (Type 2) — well-managed; no liver/kidney disease'},
      {id:4,name:'Priya Nair',age:30,blood:'AB+',city:'Kochi',type:'After Death',available:true,medical:'No major conditions; recent COVID recovered'},
      {id:5,name:'Aman Patel',age:52,blood:'O+',city:'Ahmedabad',type:'Living',available:false,medical:'Past cancer (treated 2018) — requires review'},
      {id:6,name:'Sana Ali',age:22,blood:'A-',city:'Lucknow',type:'Living',available:true,medical:'Healthy; mild asthma; non-smoker'},
      {id:7,name:'Dev Reddy',age:60,blood:'B-',city:'Hyderabad',type:'After Death',available:true,medical:'Chronic kidney disease — not eligible for kidney donation but other tissues possible'}
    ];

    const bloodTypes = ['A+','A-','B+','B-','AB+','AB-','O+','O-'];
    let listView = false;

    function init(){
      const bf = document.getElementById('bloodFilters');
      bloodTypes.forEach(bt=>{
        const id = 'bt-'+bt.replace('+','plus').replace('-','minus');
        const wrapper = document.createElement('label');
        wrapper.innerHTML = `<input type=checkbox id=${id} value='${bt}' onchange="render()" /> ${bt}`;
        bf.appendChild(wrapper);
      });
      render();
    }

    function getFilters(){
      const selected = Array.from(document.querySelectorAll('#bloodFilters input:checked')).map(i=>i.value);
      const available = document.getElementById('availableNow').checked;
      const living = document.getElementById('livingDonor').checked;
      const q = document.getElementById('search').value.trim().toLowerCase();
      const sort = document.getElementById('sort').value;
      return {selected,available,living,q,sort};
    }

    function render(){
      const {selected,available,living,q,sort} = getFilters();
      let out = donors.filter(d=>{
        if(selected.length && !selected.includes(d.blood)) return false;
        if(available && !d.available) return false;
        if(living && d.type !== 'Living') return false;
        if(q){
          const hay = (d.name+' '+d.city+' '+d.medical).toLowerCase();
          if(!hay.includes(q)) return false;
        }
        return true;
      });

      if(sort==='ageAsc') out.sort((a,b)=>a.age-b.age);
      else if(sort==='ageDesc') out.sort((a,b)=>b.age-a.age);

      const wrap = document.getElementById('listWrap');
      wrap.innerHTML = '';
      if(out.length===0){ document.getElementById('empty').style.display='block'; }
      else{ document.getElementById('empty').style.display='none'; }

      out.forEach(d=>{
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <div class='thumb'>${d.name.split(' ').map(n=>n[0]).join('').slice(0,2)}</div>
          <div class='meta'>
            <h3>${d.name} <span class='muted' style='font-weight:600'>• ${d.city}</span></h3>
            <div class='muted'>Age: ${d.age} • Donation: ${d.type}</div>
            <div class='tags'>
              <div class='blood-badge'>${d.blood}</div>
              <div class='badge'>${d.available ? 'Available' : 'Not Available'}</div>
              <div class='badge'>${d.medical.split('.')[0]}</div>
            </div>
            <div class='muted' style='margin-top:8px'>${d.medical}</div>
            <div class='actions'>
              <button class='btn' onclick="viewProfile(${d.id})">View Profile</button>
              <button class='btn primary' onclick="contactDonor(${d.id})">Contact</button>
            </div>
          </div>
        `;
        wrap.appendChild(card);
      });

      document.getElementById('count').textContent = out.length + ' donors found';
      document.getElementById('layout').classList.toggle('list-view', listView);
    }

    function viewProfile(id){
      const d = donors.find(x=>x.id===id);
      alert('Profile — '+d.name+'\nAge: '+d.age+'\nBlood: '+d.blood+'\nDetails: '+d.medical);
    }
    function contactDonor(id){
      const d = donors.find(x=>x.id===id);
      alert('Simulated contact flow for '+d.name+' — integrate real messaging API');
    }

    function toggleView(){ listView = !listView; render(); }

    function exportCSV(){
      const rows = ['Name,Age,Blood,City,DonationType,Available,MedicalDetails'];
      donors.forEach(d=> rows.push(`"${d.name}",${d.age},${d.blood},"${d.city}","${d.type}",${d.available},"${d.medical.replace(/\"/g,'') }"`));
      const blob = new Blob([rows.join('\n')],{type:'text/csv'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href=url; a.download='donors.csv'; a.click(); URL.revokeObjectURL(url);
    }

    init();