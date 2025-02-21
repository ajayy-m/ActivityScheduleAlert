// Load scheduled activities from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const scheduleList = JSON.parse(localStorage.getItem('scheduledActivities')) || [];
    const historyContainer = document.getElementById('historyList');
  
    if (scheduleList.length === 0) {
      historyContainer.innerHTML = '<p>No scheduled activities found.</p>';
    } else {
      scheduleList.forEach((activity) => {
        const activityElement = document.createElement('div');
        activityElement.classList.add('history-item');
        activityElement.innerHTML = `
          <p><strong>Activity:</strong> ${activity.desc}</p>
          <p><strong>Time:</strong> ${activity.time}</p>
        `;
        historyContainer.appendChild(activityElement);
      });
    }
  });
  