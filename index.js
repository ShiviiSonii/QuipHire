function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("translate-x-full");
}

document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons and sections
    document
      .querySelectorAll(".button")
      .forEach((b) => b.classList.remove("active", "primary"));
    document
      .querySelectorAll(".content-section")
      .forEach((section) => section.classList.remove("active"));

    // Add secondary class to all buttons
    document
      .querySelectorAll(".button")
      .forEach((b) => b.classList.add("secondary"));

    // Add active class to clicked button and its corresponding section
    button.classList.remove("secondary");
    button.classList.add("active", "primary");
    const sectionId = button.getAttribute("data-section");
    document.getElementById(sectionId).classList.add("active");
  });
});

const blogContainer = document.getElementById("blogContainer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const blogs = [
  {
    title: "Strategic Planning for Business Growth",
    author: "John Smith",
    date: "25 AUG",
    category: "Business",
  },
  {
    title: "Digital Marketing Trends 2025",
    author: "Sarah Johnson",
    date: "25 AUG",
    category: "Business",
  },
  {
    title: "Innovation in Technology",
    author: "Mike Wilson",
    date: "24 AUG",
    category: "Technology",
  },
  {
    title: "Future of Remote Work",
    author: "Emma Davis",
    date: "24 AUG",
    category: "Business",
  },
  {
    title: "Innovation in Technology",
    author: "Mike Wilson",
    date: "24 AUG",
    category: "Technology",
  },
  {
    title: "Future of Remote Work",
    author: "Emma Davis",
    date: "24 AUG",
    category: "Business",
  },
];

let currentIndex = 0;

function createBlogCard(blog) {
  return `
    <article class="blog-card">
        <img src="https://qutiiz-html.vercel.app/main-html/assets/images/blog/blog-details-img-1.jpg" alt="Blog post" class="blog-image">
        <div class="blog-content">
            <div class="blog-date">${blog.date}</div>
            <div class="blog-category">${blog.category}</div>
            <h3 class="blog-card-title">${blog.title}</h3>
            <div class="blog-author">
                <img src="https://qutiiz-html.vercel.app/main-html/assets/images/blog/blog-one-person-img-1.jpg" alt="Author" class="author-avatar">
                <span class="author-name">By ${blog.author}</span>
            </div>
        </div>
    </article>
  `;
}

function updateCards() {
  const cards = blogs
    .slice(currentIndex, currentIndex + 3) // Show 3 cards
    .map((blog) => createBlogCard(blog))
    .join("");

  blogContainer.style.opacity = "0";
  setTimeout(() => {
    blogContainer.innerHTML = cards;
    blogContainer.style.opacity = "1";
  }, 300);

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex >= blogs.length - 3; // Disable next if less than 3 blogs remain
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= 3;
    updateCards();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < blogs.length - 3) {
    currentIndex += 3;
    updateCards();
  }
});

// Initialize
updateCards();
