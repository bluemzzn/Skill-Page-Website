const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) =>{
    console.log(entry);
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }

  });
});

const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));


// ✅ Step 2: โหลดข้อมูล + สร้างการ์ด
fetch('skills.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('skill-container');
    data.forEach((skill, index) => {
      const card = document.createElement('div');
      card.className = 'card hidden';
      card.style.animationDelay = `${(index % 5 + 1) * 200}ms`;

      card.innerHTML = `
        <div class="info">
          <img src="${skill.image}" class="skill-img">
          <span>${skill.name}</span>
        </div>
      `;

      container.appendChild(card);
      observer.observe(card); // ✅ จะทำงานถูกต้องหลัง observer ถูกสร้าง
    });

    // ✅ หากอยากให้หัวข้อ "Skills" แสดงแบบ fade-in ด้วย
    const topic = document.querySelector('.topic');
    if (topic) observer.observe(topic);
  });





  document.addEventListener('DOMContentLoaded', function() {
  particlesJS('particles-js', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#00ffff" }, // สีฟ้าเหมือนธีมคุณ
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: "#00ffff", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 2, direction: "none", random: true }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" }
      }
    }
  });
});