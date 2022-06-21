function navbar(){
    return ` <div id="navhead">
    <div id="pagees">
      <p><a>Women</a></p>
      <p><a>Men</a></p>
      <p><a>Kids</a></p>
    </div>
    <div id="mainlogo"><h1>FARFETCH</h1></div>
    <div id="profile">
      <button>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
          id="flag"
          alt=""
        />
      </button>
      <div id="id01" class="ising">
            <div class="id02">
              <div class="imgcontainer">
                <p>Come on in</p>
                <span
                  onclick="document.getElementById('id01').style.display='none'"
                  class="closeee"
                  title="Close Modal"
                  >&times;</span
                >
              </div>
              <div class="cominbutons">
                <button class="sigbunn" id="sib1" onclick="changeform1()">
                  SIGN IN
                </button>
                <button class="sigbunn" onclick="changeform2()">
                  I'M NEW HERE
                </button>
              </div>

              <form id="form">
                <h2 class="naming">Email</h2>
                <input type="text" name="emails" id="emails" />
                <h2 class="naming">Password</h2>
                <input type="password" name="pass" id="password" />

                <div id="checkbox">
                  <input class="hfglp" type="checkbox" />
                  <p>Keep me signed in. What isthis?</p>
                </div>

                <div id="forgot">
                  <a href="">Forgot your password?</a>
                </div>
                <button id="submit" onclick="signuser()">Sign In</button>
              </form>
              <p id="or">OR</p>
              <button class="conitinewwith">
                <img
                  id="googleIcon"
                  src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                  alt=""
                />Continue With Google
              </button>
              <button class="conitinewwith">
                <img
                  id="appleIcon"
                  src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"
                  alt=""
                />Continue With Apple
              </button>
              <button class="conitinewwith">
                <img
                  id="facebookIcon"
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png"
                  alt=""
                />Continue With Facebook
              </button>
              <button id="newtofar" onclick="changeform2()">
                New to FARFETCH? Register
              </button>
            </div>
          </div>
      <button onclick="document.getElementById('id01').style.display='block'"
      style="width: auto">
        <span class="material-symbols-outlined"> person </span>
      </button>
      <button>
        <span class="material-symbols-outlined"> favorite </span>
      </button>
      <button>
        <span class="material-symbols-outlined"> shopping_bag </span>
      </button>
    </div>
    </div>
    <div id="navsearch">
    <div>
      <!-- trigger/to open the search popup  -->
      <input type="text" id="searchbar" placeholder="Search" />
      <button id="searchbutn">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
    </div>
    <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <div class="logobox">
        <div class="sirlogo"><h1>FARFETCH</h1></div>
        <div class="serlogo">
          <input type="search" placeholder="Search" id="searchpro" />
          <button id="mainsearchbutton">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
      <span class="close">&times;</span>
    </div>
    </div>`
    }
    
    function fotter(){
      return `<div id="footer">
      <div class="fott">
        <p class="appios">FARFETCH APP</p>
        <p class="appios">Farfetch app for iOS and Android</p>
      </div>
      <div class="fott">
        <p class="appios">
          DESTINATION/REGION, CURRENCY AND LANGUAGE India, USD $
        </p>
        <p class="appios">FOLLOW US</p>
        <div id="socialmediaicon">
          <button><i class="fa-brands fa-instagram"></i></button>
          <button><i class="fa-brands fa-facebook"></i></button>
          <button><i class="fa-brands fa-twitter"></i></button>
          <button><i class="fa-brands fa-snapchat"></i></button>
          <button><i class="fa-brands fa-pinterest-p"></i></button>
          <button><i class="fa-brands fa-youtube"></i></button>
        </div>
      </div>
      <div id="fottt">
        <div class="servisec">
          <p class="appios">CUSTOMER SERVICE</p>
          <li>Contact us</li>
          <li>Orders & delivery</li>
          <li>Payment & pricing</li>
          <li>Return & refunds</li>
          <li>FAQs</li>
          <li>Terms & conditions</li>
          <li>Promotion terms & conditions</li>
          <li>Privacy policy</li>
          <li>Accessibility</li>
        </div>
        <div class="servisec">
          <p class="appios">ABOUT FARFETCH</p>
          <li>About Us</li>
          <li>Investors</li>
          <li>Boutique Partners</li>
          <li>Affiliate Programme</li>
          <li>Student discount UNiDAYS</li>
          <li>Youth discount</li>
          <li>Careers</li>
          <li>Customer Promise</li>
          <li>FARFETCH App</li>
          <li>Sitemap</li>
          <li>Positively FARFETCH</li>
        </div>
      </div>
    </div>`
    }
    export {navbar,fotter};