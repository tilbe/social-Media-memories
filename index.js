document.addEventListener("DOMContentLoaded", () => {
  const storyImgList = document.querySelectorAll(".img");
  const likeIcons = document.querySelectorAll(".like");
  const commentIcons = document.querySelectorAll(".comment");
  const clickstory = document.querySelector(".clickstory");
  const page1 = document.querySelector(".page1");
  const page2 = document.querySelector(".page2");
  const safariPage = document.querySelector(".safariPage");
  const discover = document.querySelector(".discover");
  const profil = document.querySelector(".profil");
  const searchPage = document.querySelector(".searchPage");
  const searchBtn = document.querySelector(".searchBtn");
  const messageBtn = document.querySelector(".messageBtn");
  const messagePage = document.querySelector(".messagePage");
  const MessagexmarkBtn = document.querySelector(".xmark");
  const SearchxmarkBtn = document.querySelector(".Searchxmark");
  const messagee = document.querySelector(".messagee");
  const postArea = document.querySelector(".postArea");

  $(document).ready(function () {
    $.ajax({
      url: "story.txt",
      dataType: "json",
      success: function (json) {
        const allstory = $(".allstory");
        json.forEach(function (date) {
          const title = date.title;
          const imgge = date.imgge;

          const storyPost = $("<div class='story'></div>").html(`
  <div class="img">
      <img src="${imgge}" alt="">
  </div>
  <div class="name">
      <p>${title}</p>
  </div>
`);
          allstory.append(storyPost)

        })
        const scrollable = $(".allstory")
        const scrollWidth = scrollable[0].scrollWidth - scrollable.width();

      },
      error: function (xhr, status, error) {
        console.error("AJAX isteği başarısız oldu: " + status + " - " + error)
      }
    });
  });




  $(document).ready(function () {


    $(".img").on("click", function () {
      const storyPost = $("<div class='str'></div>").html(`
          <div class="top">
            <p>Tilbe tugrul</p>
            <a class="close"><i class="fa-solid fa-xmark"></i> </a>
          </div>
          <div class="img1"><img src="Caffe Img kopyası/personel7.webp"></div>
        `);

      $(".clickstory").append(storyPost);

      storyPost.find(".close").on("click", function () {
        storyPost.hide();
      });
    });

    $(".like").on("click", function () {
      $(this).css("color", "red");
      
    });

    $(".like").on("dblclick", function () {
      $(this).css("color", "black");
    });

    $(".comment").on("click", function () {
      const post = $(this).closest(".post");
      const commentArea = post.find(".commentarea");

      commentArea.toggle();
    });

    $(document).on("click", function (e) {
      const sendBtn = $(e.target).closest(".send");
      if (sendBtn.length) {
        const commentArea = sendBtn.closest(".commentarea");
        const messageText = commentArea.find(".messaj").val().trim();

        if (messageText !== "") {
          const messageDiv = $("<div class='message'></div>").text(messageText);
          const tursh = $("<a class='tursh'><i class='fas fa-trash delete-icon'></i></a>");

          messageDiv.append(tursh);

          const messageContainer = $("<div class='messages-container'></div>").append(messageDiv);
          const post = commentArea.closest(".post");

          post.append(messageContainer);
          commentArea.find(".messaj").val("");
          commentArea.hide();
        }
      }

      const deleteIcon = $(e.target).closest(".delete-icon");
      if (deleteIcon.length) {
        const messageDiv = deleteIcon.closest(".message");
        messageDiv.remove();
      }
    });

    $.ajax({
      url: "profil.txt",
      dataType: "json",
      success: function (json) {
        const safariPage = $(".safariPage");

        $.each(json, function (index, item) {
          const galleryItem = $("<div class='gallery-item'></div>").html(`
              <img src="${item.imgge}" alt="Resim 1">
            `);

          safariPage.append(galleryItem);
        });

        const more = $("<more class='more'></more>").html(`
            <button>More</button>
          `);

        safariPage.append(more);
      },
      error: function (error) {
        console.error("Hata:", error);
      }
    });



    $(".discover").on("click", function () {
      $(".page1, .searchPage").hide();
      $(".page2").show();
    });

    $(".profil").on("click", function () {
      $(".page1").show();
      $(".page2, .searchPage").hide();
    });

    $(".searchBtn").on("click", function () {
      $(".searchPage").show();
      $(".notificationPage").hide()
      $(".safariPage, .messagePage").hide();
      $(".scrollable-container").css("width", "20%")
      $(".postContainer").css("left", "40%")
    });

    $(".Searchxmark").on("click", function () {
      $(".safariPage").show();
      $(".searchPage").hide();
      $(".scrollable-container").css("width", "55%")
      $(".postContainer").css("left", "")
    });

    $(document).ready(function () {
      $(".Searchxmark").hover(function () {
        $(this).css("cursor", "pointer")
      }, function () {
        $(this).css("cursor", "default")
      })
    })

    $(".messageBtn").on("click", function () {
      $(".messagePage").show();
      $(".searchPage, .safariPage").hide();
      $(".notificationPage").hide()
      $(".scrollable-container").css("width", "20%")
      $(".postContainer").css("left", "40%")
    });

    $(".xmarkMess").on("click", function () {
      $(".messagePage").hide();
      $(".safariPage").show();
      $(".scrollable-container").css("width", "55%")
      $(".postContainer").css("left", "")

    });

    $.ajax({
      url: "profil.txt",
      dataType: "json",
      success: function (data) {
        const messagePage = $(".messagePage");

        $.each(data, function (index, item) {
          const message = $("<div class='message'></div>").html(`
              <div class="messageInfo">
                <img class="messageImg" src="${item.imgge}">
                <div class="mesinfo">
                <p class="name" >${item.title}</p>
                <p class="text">Lorem ipsum dolor sit, amet consectetur</p>
                </div>
            `);

          messagePage.append(message);
        });
      }
    });


    $(".messageBtn").on("click", function () {
      $(".text").css("font-size", "16px")

    })

    $(".Notification").on("click", function () {
      $(".notificationPage").show()
      $(".messagePage").hide();
      $(".safariPage").hide();
      $(".scrollable-container").css("width", "20%")
      $(".postContainer").css("left", "40%")

    })
    $(".xmarkNot").on("click", function () {
      $(".notificationPage").hide()
      $(".scrollable-container").css("width", "55%")
      $(".postContainer").css("left", "")
    })

    $(".xmarkNot").hover(function () {
      $(".xmarkNot").css("color", "red")
      $(".xmarkNot").css("cursor", "pointer")
    },
      function () {
        $(".xmarkNot").css("color", "")
        $(".xmarkNot").css("cursor", "")

      });

  })
})

$.ajax({
  url: "profil.txt", // JSON verisinin URL'sini buraya ekleyin
  dataType: "json",
  success: function (data) {
    const postContainer = $(".postContainer");

    $.each(data, function (index, item) {

      const postTop = $("<div class='postTop'></div>").html(`
        <div class="postInfo">
            <div class="profilimg"><img src="${item.imgge}"></div>
            <div class="postname">${item.title}</div>
        </div>
        <div class="postimg"><img src="${item.post}"></div>
      `);

      const postBottom = $("<div class='postBottom'></div>").html(`
        <a class="like"><i class="fa-regular fa-heart"></i></a>
        <a class="comment"><i class="fa-regular fa-comment"></i></a>
        <a><i class="fa-regular fa-paper-plane"></i></a>
      `);

      const commentArea = $("<div class='commentarea'></div>").html(`
        <textarea class="messaj" name="Your comment" cols="10" rows="2"></textarea>
        <a class="send">Send</a>
      `);

      // Her bir veri için ayrı bir postDiv oluşturun
      const postDiv = $("<div class='post'></div>");
      postDiv.append(postTop);
      postDiv.append(postBottom);
      postDiv.append(commentArea);

      // Oluşturulan postDiv'i postContainer'a ekleyin
      postContainer.append(postDiv);

    });
  },
  error: function (xhr, status, error) {
    console.error("AJAX isteği başarısız oldu: " + status + " - " + error);
  },
});

