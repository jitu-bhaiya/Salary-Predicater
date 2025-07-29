document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('salaryForm');
    const resultDiv = document.getElementById('result');
    const predictedSalary = document.getElementById('predictedSalary');
    const salaryRange = document.getElementById('salaryRange');
    const resetBtn = document.getElementById('resetBtn');

    // Salary calculation parameters
    const baseSalaries = {
        '1': 50000, // High School
        '2': 70000, // Bachelor's
        '3': 90000, // Master's
        '4': 110000 // PhD
    };

    const roleMultipliers = {
        '1': 1.2, // Software Engineer
        '2': 1.0, // Data Analyst
        '3': 1.4, // Product Manager
        '4': 1.1, // UX Designer
        '5': 0.9  // Marketing Specialist
    };

    const locationMultipliers = {
        '1': 1.3, // San Francisco
        '2': 1.2, // New York
        '3': 1.0, // Austin
        '4': 1.1, // Chicago
        '5': 0.9  // Remote
    };

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const experience = parseFloat(document.getElementById('experience').value);
        const education = document.getElementById('education').value;
        const role = document.getElementById('role').value;
        const location = document.getElementById('location').value;
        
        // Calculate salary (simplified algorithm for frontend demo)
        let baseSalary = baseSalaries[education];
        let salary = baseSalary * (1 + (experience * 0.03)); // 3% increase per year
        salary = salary * roleMultipliers[role] * locationMultipliers[location];
        
        // Add some randomness to make it feel more realistic
        const randomFactor = 0.9 + Math.random() * 0.2; // Between 0.9 and 1.1
        salary = Math.round(salary * randomFactor);
        
        // Calculate range (±10%)
        const lowerRange = Math.round(salary * 0.9);
        const upperRange = Math.round(salary * 1.1);
        
        // Display results
        predictedSalary.textContent = '$' + salary.toLocaleString();
        salaryRange.textContent = '$' + lowerRange.toLocaleString() + ' - $' + upperRange.toLocaleString();
        
        // Show results
        form.classList.add('hidden');
        resultDiv.classList.remove('hidden');
    });

    resetBtn.addEventListener('click', function() {
        form.reset();
        resultDiv.classList.add('hidden');
        form.classList.remove('hidden');
    });

    // Add animation to form inputs on focus
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
            this.parentElement.style.transition = 'transform 0.2s';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
        });
    });
});