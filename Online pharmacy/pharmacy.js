const meds = [
      {id:1,name:'Paracetamol 500mg',category:'Pain Relief',price:25,stock:true,desc:'For fever & mild pain relief'},
      {id:2,name:'Amoxicillin 250mg',category:'Antibiotics',price:80,stock:true,desc:'Antibiotic used for bacterial infections'},
      {id:3,name:'Vitamin D3 Tablets',category:'Supplements',price:120,stock:false,desc:'Boosts bone health & immunity'},
      {id:4,name:'Metformin 500mg',category:'Diabetes',price:60,stock:true,desc:'Controls blood sugar levels'},
      {id:5,name:'Aspirin 75mg',category:'Cardiac',price:40,stock:true,desc:'Used for heart & blood thinning'},
      {id:6,name:'Ibuprofen 200mg',category:'Pain Relief',price:35,stock:true,desc:'Reduces inflammation & pain'},
      {id:7,name:'Zinc Supplements',category:'Supplements',price:90,stock:true,desc:'Supports immunity & recovery'}
    ];

    function getFilters(){
      const selected = Array.from(document.querySelectorAll('.sidebar input[type=checkbox]:checked'))
        .map(cb=>cb.value);
      const inStock = document.getElementById('inStock').checked;
      const q = document.getElementById('search').value.toLowerCase();
      const sort = document.getElementById('sort').value;
      return {selected,inStock,q,sort};
    }

    function render(){
      const {selected,inStock,q,sort} = getFilters();
      let out = meds.filter(m=>{
        if(selected.length && !selected.includes(m.category)) return false;
        if(inStock && !m.stock) return false;
        if(q && !m.name.toLowerCase().includes(q)) return false;
        return true;
      });

      if(sort==='priceAsc') out.sort((a,b)=>a.price-b.price);
      if(sort==='priceDesc') out.sort((a,b)=>b.price-a.price);

      const wrap = document.getElementById('listWrap');
      wrap.innerHTML = '';
      if(out.length===0){document.getElementById('empty').style.display='block';}
      else{document.getElementById('empty').style.display='none';}

      out.forEach(m=>{
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <div class="thumb">${m.category}</div>
          <div class="meta">
            <h3>${m.name}</h3>
            <div class="muted">${m.desc}</div>
            <div class="tags">
              <div class="badge">${m.category}</div>
              <div class="badge">${m.stock ? 'In Stock' : 'Out of Stock'}</div>
            </div>
            <div class="price">₹${m.price}</div>
            <div class="actions">
              <button class="btn">Details</button>
              <button class="btn primary">Add to Cart</button>
            </div>
          </div>
        `;
        wrap.appendChild(card);
      });

      document.getElementById('count').textContent = out.length + ' medicines found';
    }
    render();