// Doctor data - in a real application this would come from a database
        const doctors = [
            // Cardiology
            {
                id: 1,
                name: "Dr.Y.SriniVasa Rao",
                specialty: "cardiology",
                specialtyName: "Cardiology",
                hospital: "City Heart Center",
                experience: "15 years",
                education: "MD, Harvard Medical School",
                description: "Specializes in interventional cardiology and heart disease prevention.",
                imageAlt: "Portrait of Dr. Sarah Johnson, a cardiologist with warm smile and professional demeanor"
            },
            {
                id: 2,
                name: "Dr.Y.Lakshmi Aruna Kumari",
                specialty: "cardiology",
                specialtyName: "Cardiology",
                hospital: "University Hospital",
                experience: "12 years",
                education: "MD, Johns Hopkins University",
                description: "Expert in electrophysiology and cardiac arrhythmia treatment.",
                imageAlt: "Portrait of Dr. Michael Chen, a cardiologist wearing a white coat and stethoscope"
            },
            {
                id: 3,
                name: "Dr. Y.Devi Vara Prasad",
                specialty: "cardiology",
                specialtyName: "Cardiology",
                hospital: "Cardiac Care Institute",
                experience: "20 years",
                education: "MD, Stanford University",
                description: "Pioneer in minimally invasive heart valve procedures.",
                imageAlt: "Portrait of Dr. Robert Williams, an experienced cardiologist with confident expression"
            },
            
            // Pulmonology
            {
                id: 4,
                name: "Dr. Vidya Naga Sri Yarramsetti",
                specialty: "pulmonology",
                specialtyName: "Pulmonology",
                hospital: "Breathwell Medical Center",
                experience: "18 years",
                education: "MD, Stanford University",
                description: "Specializes in treating respiratory diseases and sleep disorders.",
                imageAlt: "Portrait of Dr. James Wilson, a pulmonologist with kind eyes and professional appearance"
            },
            {
                id: 5,
                name: "Dr. k.Jnana Lakshmi Durga",
                specialty: "pulmonology",
                specialtyName: "Pulmonology",
                hospital: "Regional Medical Center",
                experience: "10 years",
                education: "MD, UCLA Medical School",
                description: "Focuses on asthma, COPD, and critical care pulmonology.",
                imageAlt: "Portrait of Dr. Lisa Rodriguez, a pulmonologist with friendly expression and white coat"
            },
            {
                id: 6,
                name: "Dr.R.Venkatesh",
                specialty: "pulmonology",
                specialtyName: "Pulmonology",
                hospital: "Lung Health Institute",
                experience: "14 years",
                education: "MD, University of Michigan",
                description: "Specializes in lung cancer diagnosis and treatment.",
                imageAlt: "Portrait of Dr. Amanda Park, a pulmonologist with professional demeanor and warm smile"
            },
            
            // Nephrology
            {
                id: 7,
                name: "Dr.K.Lekhana Sindhu",
                specialty: "nephrology",
                specialtyName: "Nephrology",
                hospital: "Renal Care Associates",
                experience: "14 years",
                education: "MD, Mayo Medical School",
                description: "Specialist in kidney diseases, dialysis, and transplantation.",
                imageAlt: "Portrait of Dr. Robert Kim, a nephrologist with professional demeanor and warm smile"
            },
            {
                id: 8,
                name: "Dr.P.Nitya Sri",
                specialty: "nephrology",
                specialtyName: "Nephrology",
                hospital: "University Kidney Center",
                experience: "9 years",
                education: "MD, University of Pennsylvania",
                description: "Expert in hypertension and chronic kidney disease management.",
                imageAlt: "Portrait of Dr. Emily Stevens, a nephrologist with friendly expression and stethoscope"
            },
            {
                id: 9,
                name: "Dr.Modhusudhan Rao",
                specialty: "nephrology",
                specialtyName: "Nephrology",
                hospital: "Renal Solutions Center",
                experience: "16 years",
                education: "MD, Columbia University",
                description: "Specializes in pediatric nephrology and congenital kidney disorders.",
                imageAlt: "Portrait of Dr. Benjamin Carter, a nephrologist with kind expression and white coat"
            },
            
            // Hepatology
            {
                id: 10,
                name: "Dr. charan teja",
                specialty: "hepatology",
                specialtyName: "Hepatology",
                hospital: "Digestive Health Institute",
                experience: "16 years",
                education: "MD, Yale School of Medicine",
                description: "Specializes in liver diseases, transplants, and hepatitis treatment.",
                imageAlt: "Portrait of Dr. David Patel, a hepatologist with professional appearance and confident expression"
            },
            {
                id: 11,
                name: "Dr. Mahiendhra",
                specialty: "hepatology",
                specialtyName: "Hepatology",
                hospital: "Liver Care Specialists",
                experience: "11 years",
                education: "MD, Duke University",
                description: "Focuses on fatty liver disease and metabolic liver conditions.",
                imageAlt: "Portrait of Dr. Jennifer Lee, a hepatologist with warm smile and white coat"
            },
            {
                id: 12,
                name: "Dr. Sunderpichey",
                specialty: "hepatology",
                specialtyName: "Hepatology",
                hospital: "Hepatic Medicine Center",
                experience: "18 years",
                education: "MD, University of Chicago",
                description: "Expert in liver transplantation and advanced liver diseases.",
                imageAlt: "Portrait of Dr. Marcus Johnson, a hepatologist with experienced appearance and stethoscope"
            },
            
            // Neurology
            {
                id: 13,
                name: "Dr. Denny kurtha",
                specialty: "neurology",
                specialtyName: "Neurology",
                hospital: "NeuroCare Center",
                experience: "12 years",
                education: "MD, University of California San Francisco",
                description: "Specializes in stroke treatment and neurological emergencies.",
                imageAlt: "Portrait of Dr. Sophia Mitchell, a neurologist with professional demeanor and warm expression"
            },
            {
                id: 14,
                name: "Dr.Jewan",
                specialty: "neurology",
                specialtyName: "Neurology",
                hospital: "Brain & Spine Institute",
                experience: "15 years",
                education: "MD, Washington University",
                description: "Expert in epilepsy and seizure disorders management.",
                imageAlt: "Portrait of Dr. Christopher Brown, a neurologist with confident expression and white coat"
            },
            {
                id: 15,
                name: "Dr. Peddi rajuu",
                specialty: "neurology",
                specialtyName: "Neurology",
                hospital: "Advanced Neurology Partners",
                experience: "10 years",
                education: "MD, Vanderbilt University",
                description: "Specializes in multiple sclerosis and neurodegenerative diseases.",
                imageAlt: "Portrait of Dr. Olivia Davis, a neurologist with friendly smile and professional appearance"
            },
            
            // Orthopedics
            {
                id: 16,
                name: "Dr. Mangama",
                specialty: "orthopedics",
                specialtyName: "Orthopedics",
                hospital: "Bone & Joint Center",
                experience: "17 years",
                education: "MD, University of Pennsylvania",
                description: "Specializes in sports injuries and arthroscopic surgery.",
                imageAlt: "Portrait of Dr. William Taylor, an orthopedic surgeon with athletic build and confident expression"
            },
            {
                id: 17,
                name: "Dr. Rathna Raju",
                specialty: "orthopedics",
                specialtyName: "Orthopedics",
                hospital: "Orthopedic Specialists Group",
                experience: "11 years",
                education: "MD, Johns Hopkins University",
                description: "Expert in joint replacement and reconstructive surgery.",
                imageAlt: "Portrait of Dr. Emma Wilson, an orthopedic surgeon with professional appearance and warm smile"
            },
            {
                id: 18,
                name: "Dr. Manchi",
                specialty: "orthopedics",
                specialtyName: "Orthopedics",
                hospital: "Spine & Orthopedic Institute",
                experience: "14 years",
                education: "MD, Mayo Clinic",
                description: "Specializes in spinal disorders and complex orthopedic cases.",
                imageAlt: "Portrait of Dr. Daniel Martinez, an orthopedic surgeon with confident demeanor and white coat"
            }
        ];

        // DOM elements
        const doctorsContainer = document.getElementById('doctors-container');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const searchInput = document.getElementById('search-input');
        const searchResults = document.getElementById('search-results');

        // Function to render doctors based on filter
        function renderDoctors(filter = 'all') {
            doctorsContainer.innerHTML = '';
            
            const filteredDoctors = filter === 'all' 
                ? doctors 
                : doctors.filter(doctor => doctor.specialty === filter);
            
            filteredDoctors.forEach(doctor => {
                const doctorCard = document.createElement('div');
                doctorCard.className = 'doctor-card bg-white rounded-lg shadow-md overflow-hidden';
                doctorCard.innerHTML = `
                    <div class="h-48 bg-gray-200 overflow-hidden">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyU1I8ilHdJ536jYCvG07jSdggQJQsU1z8UQ&s" alt="${doctor.imageAlt}" class="w-full h-full object-cover">
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="text-xl font-bold text-gray-800">${doctor.name}</h3>
                            <span class="px-3 py-1 text-xs font-medium rounded-full" style="background:#fffde7;color:#ffb300;">${doctor.specialtyName}</span>
                        </div>
                        <p class="text-gray-600 text-sm mb-2">${doctor.hospital}</p>
                        <p class="text-gray-700 mb-4">${doctor.description}</p>
                        <div class="border-t border-gray-100 pt-4">
                            <p class="text-sm text-gray-600 mb-1"><i class="fas fa-graduation-cap text-blue-500 mr-2"></i> ${doctor.education}</p>
                            <p class="text-sm text-gray-600"><i class="fas fa-briefcase text-blue-500 mr-2"></i> ${doctor.experience} experience</p>
                        </div>
                        <button class="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                            Request Referral
                        </button>
                    </div>
                `;
                doctorsContainer.appendChild(doctorCard);
            });
        }

        // Set up filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active button
                filterButtons.forEach(btn => {
                    btn.classList.remove('active-filter');
                    btn.classList.add('bg-gray-200', 'text-gray-700');
                });
                
                button.classList.add('active-filter');
                button.classList.remove('bg-gray-200', 'text-gray-700');
                
                // Filter and render doctors
                const filter = button.getAttribute('data-filter');
                renderDoctors(filter);
            });
        });

        // Search functionality
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase().trim();
            
            if (query.length === 0) {
                searchResults.style.display = 'none';
                return;
            }
            
            const results = doctors.filter(doctor => 
                doctor.name.toLowerCase().includes(query) || 
                doctor.specialtyName.toLowerCase().includes(query) ||
                doctor.hospital.toLowerCase().includes(query) ||
                doctor.description.toLowerCase().includes(query)
            );
            
            if (results.length > 0) {
                searchResults.innerHTML = '';
                results.forEach(doctor => {
                    const resultItem = document.createElement('div');
                    resultItem.className = 'p-3 border-b border-gray-100 hover:bg-blue-50 cursor-pointer';
                    resultItem.innerHTML = `
                        <div class="font-medium">${doctor.name}</div>
                        <div class="text-sm" style="color:#ffb300;">${doctor.specialtyName}</div>
                        <div class="text-sm text-gray-600">${doctor.hospital}</div>
                    `;
                    resultItem.addEventListener('click', () => {
                        searchInput.value = '';
                        searchResults.style.display = 'none';
                        
                        // Filter to show this doctor's specialty
                        filterButtons.forEach(btn => {
                            btn.classList.remove('active-filter');
                            btn.classList.add('bg-gray-200', 'text-gray-700');
                            if (btn.getAttribute('data-filter') === doctor.specialty) {
                                btn.classList.add('active-filter');
                                btn.classList.remove('bg-gray-200', 'text-gray-700');
                            }
                        });
                        
                        renderDoctors(doctor.specialty);
                        
                        // Scroll to doctors section
                        document.getElementById('doctors-container').scrollIntoView({ behavior: 'smooth' });
                    });
                    searchResults.appendChild(resultItem);
                });
                searchResults.style.display = 'block';
            } else {
                searchResults.innerHTML = '<div class="p-3 text-gray-500">No doctors found</div>';
                searchResults.style.display = 'block';
            }
        });

        // Close search results when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });

        // Initial render
        renderDoctors();