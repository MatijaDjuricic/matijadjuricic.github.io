// Charts.js
Chart.defaults.font.size = 9;
const htmlChart = document.getElementById('myChart-html');
new Chart(htmlChart, {
    type: 'pie',
    data: {
        labels: ['HTML', 'Unknowledge'],
        datasets: [
            {
            label: 'HTML',
            data: [97, 3],
            backgroundColor: [
                'rgb(155, 20 ,20, 1)',
                'rgba(220, 10, 10, 1)'
            ]
        }]
    }, 
    options: {
    plugins: {
        legend: {
            display: true,
            position: 'left',
            labels: {
                usePointStyle: true,
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                }
            }
        }
    }
});
const cssChart = document.getElementById('myChart-css');
new Chart(cssChart, {
    type: 'pie',
    data: {
        labels: ['CSS', 'Sass', 'Bootstrap', 'Unknowledge'],
        datasets: [
            {
            label: 'CSS',
            data: [45, 35, 15, 5],
            backgroundColor: [
                'rgba(50, 135, 245, 1)',
                'rgba(170, 25, 175, 1)',
                'rgba(70, 40, 165, 1)',
                'rgba(220, 10, 10, 1)'
            ]
        }]
    }, 
    options: {
    plugins: {
        legend: {
            display: true,
            position: 'left',
            labels: {
                usePointStyle: true,
            }
        }
    }
    }
});
const jsChart = document.getElementById('myChart-js');
new Chart(jsChart, {
    type: 'pie',
    data: {
        labels: ['JAVA SCRIPT', 'React', 'Angular', 'Node', 'Unknowledge'],
        datasets: [
            {
            label: 'JAVA SCRIPT',
            data: [40, 10, 15, 20, 15],
            backgroundColor: [
                'rgba(240, 240, 2, 1)',
                'rgba(0, 250, 255, 1)',
                'rgba(230, 125, 125, 1)',
                'rgba(40, 115, 50, 1)',
                'rgba(220, 10, 10, 1)'
            ]
        }]
    }, 
    options: {
    plugins: {
        legend: {
            display: true,
            position: 'left',
            labels: {
                usePointStyle: true,
            }
        }
    }
    }
});
const phpChart = document.getElementById('myChart-php');
new Chart(phpChart, {
    type: 'pie',
    data: {
        labels: ['PHP', 'Laravel', 'Symfony', 'Unknowledge'],
        datasets: [
            {
            label: 'PHP',
            data: [35, 20, 10, 35],
            backgroundColor: [
                'rgba(55, 0, 255, 1)',
                'rgba(170, 30, 115, 1)',
                'rgba(195, 195, 0, 1)',
                'rgba(220, 10, 10, 1)'
            ]
        }]
    }, 
    options: {
    plugins: {
        legend: {
            display: true,
            position: 'left',
            labels: {
                usePointStyle: true,
            }
        }
    }
    }
});
const sqlChart = document.getElementById('myChart-sql');
new Chart(sqlChart, {
    type: 'pie',
    data: {
        labels: ['SQL', 'My admin', 'My SQL', 'Unknowledge'],
        datasets: [
            {
            label: 'SQL',
            data: [40, 30, 20, 10],
            backgroundColor: [
                'rgba(227, 227, 227, 1)',
                'rgba(225, 145 , 6, 1)',
                'rgba(30, 55, 150, 1)',
                'rgba(220, 10, 10, 1)'
            ]
        }]
    }, 
    options: {
    plugins: {
        legend: {
            display: true,
            position: 'left',
            labels: {
                usePointStyle: true,
            }
        }
    }
    }
});