// Sample data
	let healthData = [
		{ date: '2025-09-10', steps: 8000, calories: 2200, sleep: 7, water: 2000, weight: 70, mood: 'Happy', stress: 'Low' },
		{ date: '2025-09-11', steps: 9500, calories: 2100, sleep: 6.5, water: 2500, weight: 69.5, mood: 'Neutral', stress: 'Medium' },
		{ date: '2025-09-12', steps: 7000, calories: 2000, sleep: 8, water: 1800, weight: 70.2, mood: 'Stressed', stress: 'High' },
	];

	function getLabels() { return healthData.map(d => d.date); }
	function getSteps() { return healthData.map(d => d.steps); }
	function getCalories() { return healthData.map(d => d.calories); }
	function getSleep() { return healthData.map(d => d.sleep); }
	function getWater() { return healthData.map(d => d.water); }
	function getWeight() { return healthData.map(d => d.weight); }
	function getMood() { return healthData.map(d => d.mood); }
	function getStress() { return healthData.map(d => d.stress); }

	// Chart.js setup
	const stepsChart = new Chart(document.getElementById('stepsChart'), {
		type: 'line',
		data: {
			labels: getLabels(),
			datasets: [{
				label: 'Steps',
				data: getSteps(),
				borderColor: '#1976d2',
				backgroundColor: 'rgba(25,118,210,0.08)',
				fill: true,
				tension: 0.3,
			}]
		},
		options: { responsive: true, plugins: { legend: { display: true } } }
	});

	const caloriesChart = new Chart(document.getElementById('caloriesChart'), {
		type: 'bar',
		data: {
			labels: getLabels(),
			datasets: [{
				label: 'Calories',
				data: getCalories(),
				backgroundColor: '#43a047',
			}]
		},
		options: { responsive: true, plugins: { legend: { display: true } } }
	});

	const sleepChart = new Chart(document.getElementById('sleepChart'), {
		type: 'line',
		data: {
			labels: getLabels(),
			datasets: [{
				label: 'Sleep (hrs)',
				data: getSleep(),
				borderColor: '#ffb300',
				backgroundColor: 'rgba(255,179,0,0.08)',
				fill: true,
				tension: 0.3,
			}]
		},
		options: { responsive: true, plugins: { legend: { display: true } } }
	});

	const waterChart = new Chart(document.getElementById('waterChart'), {
		type: 'bar',
		data: {
			labels: getLabels(),
			datasets: [{
				label: 'Water Intake (ml)',
				data: getWater(),
				backgroundColor: '#0288d1',
			}]
		},
		options: { responsive: true, plugins: { legend: { display: true } } }
	});

	const weightChart = new Chart(document.getElementById('weightChart'), {
		type: 'line',
		data: {
			labels: getLabels(),
			datasets: [{
				label: 'Weight (kg)',
				data: getWeight(),
				borderColor: '#8e24aa',
				backgroundColor: 'rgba(142,36,170,0.08)',
				fill: true,
				tension: 0.3,
			}]
		},
		options: { responsive: true, plugins: { legend: { display: true } } }
	});

	// Mood chart (pie)
	function getMoodCounts() {
		const moods = ['Happy','Neutral','Sad','Stressed'];
		return moods.map(m => healthData.filter(d => d.mood===m).length);
	}
	const moodChart = new Chart(document.getElementById('moodChart'), {
		type: 'pie',
		data: {
			labels: ['Happy','Neutral','Sad','Stressed'],
			datasets: [{
				label: 'Mood',
				data: getMoodCounts(),
				backgroundColor: ['#ffd600','#90caf9','#e57373','#ff8a65'],
			}]
		},
		options: {
			responsive: true,
			plugins: { legend: { display: true } },
			aspectRatio: 1,
		}
	});

	// Stress chart (doughnut)
	function getStressCounts() {
		const levels = ['Low','Medium','High'];
		return levels.map(l => healthData.filter(d => d.stress===l).length);
	}
	const stressChart = new Chart(document.getElementById('stressChart'), {
		type: 'doughnut',
		data: {
			labels: ['Low','Medium','High'],
			datasets: [{
				label: 'Stress',
				data: getStressCounts(),
				backgroundColor: ['#43a047','#ffb300','#e53935'],
			}]
		},
		options: {
			responsive: true,
			plugins: { legend: { display: true } },
			aspectRatio: 1,
		}
	});

	// Weekly/Monthly summary
	function getWeeklyData() {
		// Last 7 days
		return healthData.slice(-7);
	}
	function getMonthlyData() {
		// Last 30 days
		return healthData.slice(-30);
	}
	function getAvg(arr, key) {
		if (!arr.length) return 0;
		return (arr.reduce((sum, d) => sum + d[key], 0) / arr.length).toFixed(1);
	}
	const weeklyChart = new Chart(document.getElementById('weeklyChart'), {
		type: 'bar',
		data: {
			labels: ['Steps','Calories','Sleep','Water','Weight'],
			datasets: [{
				label: 'Weekly Avg',
				data: [getAvg(getWeeklyData(),'steps'),getAvg(getWeeklyData(),'calories'),getAvg(getWeeklyData(),'sleep'),getAvg(getWeeklyData(),'water'),getAvg(getWeeklyData(),'weight')],
				backgroundColor: ['#1976d2','#43a047','#ffb300','#0288d1','#8e24aa'],
			}]
		},
		options: { responsive: true, plugins: { legend: { display: true } } }
	});
	const monthlyChart = new Chart(document.getElementById('monthlyChart'), {
		type: 'bar',
		data: {
			labels: ['Steps','Calories','Sleep','Water','Weight'],
			datasets: [{
				label: 'Monthly Avg',
				data: [getAvg(getMonthlyData(),'steps'),getAvg(getMonthlyData(),'calories'),getAvg(getMonthlyData(),'sleep'),getAvg(getMonthlyData(),'water'),getAvg(getMonthlyData(),'weight')],
				backgroundColor: ['#1976d2','#43a047','#ffb300','#0288d1','#8e24aa'],
			}]
		},
		options: { responsive: true, plugins: { legend: { display: true } } }
	});

	function updateSummaryBar() {
		const last = healthData[healthData.length-1];
		summaryBar.data.labels = ['Steps', 'Calories', 'Sleep', 'Water', 'Weight'];
		summaryBar.data.datasets[0].data = [last.steps, last.calories, last.sleep, last.water, last.weight];
		summaryBar.update();
	}
	const summaryBar = new Chart(document.getElementById('summaryBar'), {
		type: 'bar',
		data: {
			labels: ['Steps', 'Calories', 'Sleep', 'Water', 'Weight'],
			datasets: [{
				label: 'Latest Entry',
				data: [healthData[healthData.length-1].steps, healthData[healthData.length-1].calories, healthData[healthData.length-1].sleep, healthData[healthData.length-1].water, healthData[healthData.length-1].weight],
				backgroundColor: ['#1976d2', '#43a047', '#ffb300', '#0288d1', '#8e24aa'],
			}]
		},
		options: { responsive: true, plugins: { legend: { display: true } } }
	});

	// Data table
	function updateTable() {
		const tbody = document.querySelector('#dataTable tbody');
		tbody.innerHTML = '';
		healthData.slice().reverse().forEach(d => {
			const tr = document.createElement('tr');
			tr.innerHTML = `<td>${d.date}</td><td>${d.steps}</td><td>${d.calories}</td><td>${d.sleep}</td><td>${d.water}</td><td>${d.weight}</td><td>${d.mood}</td><td>${d.stress}</td>`;
			tbody.appendChild(tr);
		});
	}
	updateTable();

	// Goals
	function updateGoals() {
		const last = healthData[healthData.length-1];
		const stepsGoal = parseInt(document.getElementById('goalSteps').textContent);
		const waterGoal = parseInt(document.getElementById('goalWater').textContent);
		const sleepGoal = parseFloat(document.getElementById('goalSleep').textContent);
		document.getElementById('goalStepsBar').style.width = Math.min(100, last.steps/stepsGoal*100) + '%';
		document.getElementById('goalWaterBar').style.width = Math.min(100, last.water/waterGoal*100) + '%';
		document.getElementById('goalSleepBar').style.width = Math.min(100, last.sleep/sleepGoal*100) + '%';
	}
	updateGoals();

	// Reminders
	function showReminder() {
		const today = new Date().toISOString().slice(0,10);
		if (!healthData.find(d => d.date === today)) {
			document.getElementById('reminderBox').style.display = 'block';
		} else {
			document.getElementById('reminderBox').style.display = 'none';
		}
	}
	showReminder();

	// Export CSV
	document.getElementById('exportBtn').onclick = function() {
		let csv = 'Date,Steps,Calories,Sleep,Water,Weight,Mood,Stress\n';
		healthData.forEach(d => {
			csv += `${d.date},${d.steps},${d.calories},${d.sleep},${d.water},${d.weight},${d.mood},${d.stress}\n`;
		});
		const blob = new Blob([csv], {type:'text/csv'});
		const a = document.createElement('a');
		a.href = URL.createObjectURL(blob);
		a.download = 'health_data.csv';
		a.click();
	};

	// Dark mode toggle
	document.getElementById('toggleDark').onclick = function() {
		document.body.classList.toggle('dark');
		// Change CSS variables for dark mode
		if(document.body.classList.contains('dark')) {
			document.documentElement.style.setProperty('--background', '#181c24');
			document.documentElement.style.setProperty('--text', '#f5f7fa');
			document.documentElement.style.setProperty('--card', '#23283a');
			document.documentElement.style.setProperty('--primary', '#90caf9');
			document.documentElement.style.setProperty('--accent', '#ffd600');
		} else {
			document.documentElement.style.setProperty('--background', '#f5f7fa');
			document.documentElement.style.setProperty('--text', '#222');
			document.documentElement.style.setProperty('--card', '#fbfbfb');
			document.documentElement.style.setProperty('--primary', '#1976d2');
			document.documentElement.style.setProperty('--accent', '#ffb300');
		}
		// Optionally update chart colors (for instant feedback)
		stepsChart.data.datasets[0].borderColor = document.body.classList.contains('dark') ? '#90caf9' : '#1976d2';
		stepsChart.data.datasets[0].backgroundColor = document.body.classList.contains('dark') ? 'rgba(144,202,249,0.08)' : 'rgba(25,118,210,0.08)';
		stepsChart.update();
		sleepChart.data.datasets[0].borderColor = document.body.classList.contains('dark') ? '#ffd600' : '#ffb300';
		sleepChart.data.datasets[0].backgroundColor = document.body.classList.contains('dark') ? 'rgba(255,214,0,0.08)' : 'rgba(255,179,0,0.08)';
		sleepChart.update();
		caloriesChart.data.datasets[0].backgroundColor = document.body.classList.contains('dark') ? '#43a047' : '#43a047';
		caloriesChart.update();
		waterChart.data.datasets[0].backgroundColor = document.body.classList.contains('dark') ? '#0288d1' : '#0288d1';
		waterChart.update();
		weightChart.data.datasets[0].borderColor = document.body.classList.contains('dark') ? '#ce93d8' : '#8e24aa';
		weightChart.data.datasets[0].backgroundColor = document.body.classList.contains('dark') ? 'rgba(206,147,216,0.08)' : 'rgba(142,36,170,0.08)';
		weightChart.update();
		moodChart.data.datasets[0].backgroundColor = document.body.classList.contains('dark') ? ['#ffd600','#90caf9','#e57373','#ff8a65'] : ['#ffd600','#90caf9','#e57373','#ff8a65'];
		moodChart.update();
		stressChart.data.datasets[0].backgroundColor = document.body.classList.contains('dark') ? ['#43a047','#ffd600','#e53935'] : ['#43a047','#ffb300','#e53935'];
		stressChart.update();
		weeklyChart.data.datasets[0].backgroundColor = document.body.classList.contains('dark') ? ['#90caf9','#43a047','#ffd600','#0288d1','#ce93d8'] : ['#1976d2','#43a047','#ffb300','#0288d1','#8e24aa'];
		weeklyChart.update();
		monthlyChart.data.datasets[0].backgroundColor = document.body.classList.contains('dark') ? ['#90caf9','#43a047','#ffd600','#0288d1','#ce93d8'] : ['#1976d2','#43a047','#ffb300','#0288d1','#8e24aa'];
		monthlyChart.update();
		summaryBar.data.datasets[0].backgroundColor = document.body.classList.contains('dark') ? ['#90caf9','#43a047','#ffd600','#0288d1','#ce93d8'] : ['#1976d2','#43a047','#ffb300','#0288d1','#8e24aa'];
		summaryBar.update();
	};

	// Form handler
	document.getElementById('healthForm').onsubmit = function(e) {
		e.preventDefault();
		const date = document.getElementById('date').value;
		const steps = parseInt(document.getElementById('steps').value);
		const calories = parseInt(document.getElementById('calories').value);
		const sleep = parseFloat(document.getElementById('sleep').value);
		const water = parseInt(document.getElementById('water').value);
		const weight = parseFloat(document.getElementById('weight').value);
		const mood = document.getElementById('mood').value;
		const stress = document.getElementById('stress').value;
		healthData.push({ date, steps, calories, sleep, water, weight, mood, stress });
		// Update charts
		stepsChart.data.labels = getLabels();
		stepsChart.data.datasets[0].data = getSteps();
		stepsChart.update();
		caloriesChart.data.labels = getLabels();
		caloriesChart.data.datasets[0].data = getCalories();
		caloriesChart.update();
		sleepChart.data.labels = getLabels();
		sleepChart.data.datasets[0].data = getSleep();
		sleepChart.update();
		waterChart.data.labels = getLabels();
		waterChart.data.datasets[0].data = getWater();
		waterChart.update();
		weightChart.data.labels = getLabels();
		weightChart.data.datasets[0].data = getWeight();
		weightChart.update();
		moodChart.data.datasets[0].data = getMoodCounts();
		moodChart.update();
		stressChart.data.datasets[0].data = getStressCounts();
		stressChart.update();
		weeklyChart.data.datasets[0].data = [getAvg(getWeeklyData(),'steps'),getAvg(getWeeklyData(),'calories'),getAvg(getWeeklyData(),'sleep'),getAvg(getWeeklyData(),'water'),getAvg(getWeeklyData(),'weight')];
		weeklyChart.update();
		monthlyChart.data.datasets[0].data = [getAvg(getMonthlyData(),'steps'),getAvg(getMonthlyData(),'calories'),getAvg(getMonthlyData(),'sleep'),getAvg(getMonthlyData(),'water'),getAvg(getMonthlyData(),'weight')];
		monthlyChart.update();
		updateSummaryBar();
		updateTable();
		updateGoals();
		showReminder();
		// Reset form
		document.getElementById('healthForm').reset();
	};