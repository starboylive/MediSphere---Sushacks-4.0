function updateBMI(){
      const h = parseFloat(document.getElementById('height').value);
      const w = parseFloat(document.getElementById('weight').value);
      const out = document.getElementById('bmi');
      if(!h || !w){ out.value = '' ; return }
      const heightM = h/100;
      const bmi = w/(heightM*heightM);
      out.value = bmi ? bmi.toFixed(1) : '';
    }

    function resetForm(){
      document.getElementById('donorForm').reset();
      document.getElementById('bmi').value = '';
    }

    function handleSubmit(){
      // gather minimal summary for demo — in real app submit to backend
      const name = document.getElementById('fullName').value || '—';
      alert('Survey submitted for: ' + name + '\n(Appointment booked');
      // optionally reset
      // resetForm();
    }