const donors = [
      {id:1,name:'Rahul Mehra',age:28,blood:'A+',organ:'Kidney',type:'Living',city:'Mumbai',available:true,medical:'Healthy, non-smoker, no chronic illness.'},
      {id:2,name:'Anita Kapoor',age:45,blood:'O-',organ:'Liver',type:'Deceased',city:'Delhi',available:false,medical:'History of hypertension, otherwise stable.'},
      {id:3,name:'Vikram Singh',age:34,blood:'B+',organ:'Heart',type:'Living',city:'Bengaluru',available:true,medical:'Type 2 diabetes, well-managed.'},
      {id:4,name:'Priya Nair',age:30,blood:'AB+',organ:'Eyes',type:'Deceased',city:'Kochi',available:true,medical:'Recovered from COVID recently.'},
      {id:5,name:'Aman Patel',age:52,blood:'O+',organ:'Lungs',type:'Living',city:'Ahmedabad',available:false,medical:'Cancer survivor, under medical review.'},
      {id:6,name:'Sana Ali',age:22,blood:'A-',organ:'Kidney',type:'Living',city:'Lucknow',available:true,medical:'Mild asthma, otherwise healthy.'},
      {id:7,name:'Dev Reddy',age:60,blood:'B-',organ:'Liver',type:'Deceased',city:'Hyderabad',available:true,medical:'Chronic kidney disease; other organs eligible.'}
    ];

    function getFilters(){
      const selectedBlood = Array.from(document.querySelectorAll('.sidebar input[type=checkbox]:checked'))
        .map(cb=>cb.value);
      const available = document.getElementById('available').checked;
      const q = document.getElementById('search').value.toLowerCase();
      const sort = document.getElementById('sort').value;
      return {selectedBlood,available,q,sort};
    }

    function render(){
      const {selectedBlood,available,q,sort} = getFilters();
      let out = donors.filter(d=>{
        if(selectedBlood.length && !selectedBlood.includes(d.blood) && !selectedBlood.includes(d.type)) return false;
        if(available && !d.available) return false;
        if(q && !(d.name.toLowerCase().includes(q) || d.city.toLowerCase().includes(q) || d.organ.toLowerCase().includes(q))) return false;
        return true;
      });

      if(sort==='ageAsc') out.sort((a,b)=>a.age-b.age);
      if(sort==='ageDesc') out.sort((a,b)=>b.age-a.age);

      const wrap = document.getElementById('listWrap');
      wrap.innerHTML = '';
      if(out.length===0){document.getElementById('empty').style.display='block';}
      else{document.getElementById('empty').style.display='none';}

      out.forEach(d=>{
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <div class="thumb">${d.organ}</div>
          <div class="meta">
            <h3>${d.name} <span class="muted">• ${d.city}</span></h3>
            <div class="muted">Age: ${d.age} • Donor: ${d.type}</div>
            <div class="tags">
              <div class="blood">${d.blood}</div>
              <div class="badge">${d.organ}</div>
              <div class="badge">${d.available ? 'Available' : 'Not Available'}</div>
            </div>
            <div class="muted" style="margin-top:8px">${d.medical}</div>
            <div class="actions">
              <button class="btn">View Profile</button>
              <button class="btn primary">Contact</button>
            </div>
          </div>
        `;
        wrap.appendChild(card);
      });

      document.getElementById('count').textContent = out.length + ' donors found';
    }
    render();