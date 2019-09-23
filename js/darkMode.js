var checkbox = document.getElementById('switch');
      checkbox.addEventListener('change', function () {
        if (this.checked) { //dark mode
          transition()
          document.getElementsByTagName("BODY")[0].style.backgroundColor = "#444"; // background
          document.getElementById('mainNav').style.backgroundColor = "#444"; // navbar
          document.getElementById('mainNav').style.borderBottom = "#444"; // navbar banner
          document.getElementsByClassName('post-title')[0].style.color = "white"; // body text
          //document.getElementById('ggggg').style.color = "red";
          // dividers
          // copyright
        }
        else { //light mode
          transition()
          document.getElementsByTagName("BODY")[0].style.backgroundColor = null; // revert background
          document.getElementById('mainNav').style.backgroundColor = null; // revert navbar background
          document.getElementById('mainNav').style.borderBottom = null; // revert navbar banner
          // revert body text
          // revert dividers
          // revert copyright
        }
      })

      let transition = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
          document.documentElement.classList.remove('transition')
        }, 1000)
      }