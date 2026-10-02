const forumLatest =
  "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://cdn.freecodecamp.org/curriculum/forum-latest";

const allCategories = {
  299: { category: "Career Advice", className: "career" },
  409: { category: "Project Feedback", className: "feedback" },
  417: { category: "freeCodeCamp Support", className: "support" },
  421: { category: "JavaScript", className: "javascript" },
  423: { category: "HTML - CSS", className: "html-css" },
  424: { category: "Python", className: "python" },
  432: { category: "You Can Do This!", className: "motivation" },
  560: { category: "Back-End Development", className: "backend" },
};

function timeAgo(timestamp) {
  const currentTime = new Date();
  const postTime = new Date(timestamp);

  const difference = currentTime - postTime;

  const minutes = Math.floor(difference / (1000 * 60));

  if (minutes < 60) {
    return `${minutes}m ago`;
  }

  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return `${hours}h ago`;
  }

  const days = Math.floor(hours / 24);

  return `${days}d ago`;
}

function viewCount(views) {
  if (views >= 1000) {
    return `${Math.floor(views / 1000)}k`;
  }

  return views;
}

function forumCategory(id) {
  let category = "General";
  let className = "general";

  if (allCategories[id]) {
    category = allCategories[id].category;
    className = allCategories[id].className;
  }

  return `<a class="category ${className}" href="${forumCategoryUrl}${className}/${id}">${category}</a>`;
}

function avatars(posters, users) {
  let result = [];

  for (const poster of posters) {
    let user = users.find((user) => user.id == poster.user_id);

    let src = user.avatar_template.replace("{size}", 30);

    if (src.startsWith("/")) {
      src = avatarUrl + src;
    }

    result.push(`<img src="${src}" alt="${user.name}" >`);
  }

  return result.join("");
}

function showLatestPosts(data) {
  const users = data.users;
  const topics = data.topic_list.topics;

  const rows = topics.map((topic) => {
    return `
        <tr>
            <td>
                <a class="post-title" href="${forumTopicUrl}${topic.slug}/${topic.id}">
                    ${topic.title}
                </a>
                ${forumCategory(topic.category_id)}
            </td>

            <td>
                <div class="avatar-container">
                    ${avatars(topic.posters, users)}
                </div>
            </td>

            <td>
                ${topic.posts_count - 1}
            </td>

            <td>
                ${viewCount(topic.views)}
            </td>

            <td>
                ${timeAgo(topic.bumped_at)}
            </td>
        </tr>
        `;
  });

  document.getElementById("posts-container").innerHTML = rows.join("");
}

async function fetchData() {
  try {
    const res = await fetch(forumLatest);

    const data = await res.json();

    showLatestPosts(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
