// Initialize Lucide icons
lucide.createIcons({ strokeWidth: 1.5 });

// Projects data
const projects = [
  {
    id: 1,
    title: "ANA MILK TEA CAO LÃNH",
    category: "Showroom & Coffee Shop",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "BEE'S HOUSE CAO LÃNH",
    category: "Biệt Thự",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "CHIẾN'S HOUSE",
    category: "Nhà Phố",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "COLIN COFFEE TẠI TAM NÔNG",
    category: "Showroom & Coffee Shop",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "DIAMOND HOTEL HẬU GIANG",
    category: "Khách Sạn",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "VILLA NGUYỄN BÌNH",
    category: "Biệt Thự",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
  },
  {
    id: 7,
    title: "MODERN TOWNHOUSE",
    category: "Nhà Phố",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
  },
  {
    id: 8,
    title: "BK-HOME OFFICE",
    category: "Văn Phòng",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
  },
  {
    id: 9,
    title: "LUXURY VILLA CẦN THƠ",
    category: "Biệt Thự",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
  },
];

// Function to render projects
function renderProjects(filter = "all") {
  const projectsGrid = document.getElementById("projectsGrid");
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  projectsGrid.innerHTML = filteredProjects
    .map(
      (project) => `
        <div class="project-card bg-white rounded-xl overflow-hidden border border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-lg group">
            <div class="relative overflow-hidden aspect-[4/3]">
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div class="p-6">
                <h3 class="text-base font-semibold text-zinc-900 mb-2">${project.title}</h3>
                <span class="inline-block px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-medium rounded-full">${project.category}</span>
            </div>
        </div>
      `
    )
    .join("");
}

// Initial render
renderProjects("all");

// Filter functionality
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    filterBtns.forEach((b) => {
      b.classList.remove("bg-zinc-900", "text-white");
      b.classList.add("bg-white", "text-zinc-600", "border", "border-zinc-200");
    });

    this.classList.remove(
      "bg-white",
      "text-zinc-600",
      "border",
      "border-zinc-200"
    );
    this.classList.add("bg-zinc-900", "text-white");

    const filter = this.getAttribute("data-filter");
    renderProjects(filter);
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
