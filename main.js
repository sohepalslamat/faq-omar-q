// ========== Stage 1 Data ==========
const mainOptions = [
  {id:"creative_art", label:"I love creating visual ideas, drawing, design, and artistic expression with my own colors.", emoji:"🎨", field:"Art & Design"},
  {id:"creative_media", label:"I enjoy producing videos, creating content, or working behind the camera or in media.", emoji:"🎬", field:"Creative Media"},
  {id:"business", label:"I love analyzing numbers, understanding markets, and managing money or developing companies.", emoji:"📈", field:"Business Management"},
  {id:"digital_tech", label:"I am passionate about technology, programming, and using artificial intelligence or cybersecurity.", emoji:"💻", field:"Digital Technologies"},
  {id:"it_engineer", label:"I enjoy solving technical problems, building systems, and maintaining devices.", emoji:"🔧", field:"Information Technology"},
  {id:"engineering", label:"I love learning how things are built and designing engineering solutions.", emoji:"⚙️", field:"Engineering"},
  {id:"construction", label:"I am interested in construction, urban planning, architecture, and building-related services.", emoji:"🏗️", field:"Construction Engineering"},
  {id:"travel_tourism", label:"I love planning events, traveling, managing trips, and cultural experiences.", emoji:"🧳", field:"Travel & Tourism"},
  {id:"health_social", label:"I find myself supporting people, improving their health, or providing community care.", emoji:"💖", field:"Health & Social Care"},
  {id:"esports", label:"I aspire to be a team leader in esports or support players.", emoji:"🎮", field:"Esports"},
  {id:"hospitality", label:"I enjoy customer service, hotel management, and organizing unique hospitality experiences.", emoji:"🏨", field:"Hospitality Management"},
];

const questionsP1 = [
  "Which of these statements resembles you the most?",
  "What best describes your future ambition?",
  "The app you use most or like to use:",
  "How do your friends talk about you?"
];

const optionsTextsP1 = [
  mainOptions.map(opt => opt.label),
  [
    "To become a visual artist or a world-class designer (🎨)",
    "To establish a famous content channel (🎬)",
    "To manage a successful project or work in a major company (📈)",
    "To innovate advanced technical solutions (💻)",
    "To be a programmer or smart systems engineer (🔧)",
    "To make a difference in industry or manufacturing (⚙️)",
    "To build smart cities or beautiful homes (🏗️)",
    "To be a global travel organizer (🧳)",
    "To help people in their daily lives (💖)",
    "To compete in global gaming tournaments (🎮)",
    "To manage a luxury hotel or tourist resort (🏨)"
  ],
  [
    "Canva / Procreate (🎨)",
    "TikTok / CapCut (🎬)",
    "Excel / Notion / LinkedIn (📈)",
    "ChatGPT / GitHub / VSCode (💻)",
    "Arduino / File Explorer / Android Studio (🔧)",
    "AutoCAD / Fusion 360 (⚙️)",
    "Planner 5D / Floorplanner (🏗️)",
    "Google Travel / Airbnb (🧳)",
    "7keema / Sehhaty / Daily Care apps (💖)",
    "Discord / Twitch / Steam (🎮)",
    "Booking / Trivago / Yelp (🏨)"
  ],
  [
    "Artistic and creative (🎨)",
    "Funny and loves documentation (🎬)",
    "Rational and organized (📈)",
    "Tech-obsessed (💻)",
    "Obsessed with electronics and experimentation (🔧)",
    "Loves tools and industry (⚙️)",
    "Very organized and precise (🏗️)",
    "Adventurous and loves to travel (🧳)",
    "Kind-hearted and loves to help (💖)",
    "Competitive and loves challenges (🎮)",
    "Hospitable and cares about details (🏨)"
  ]
];

// ========== Stage 2 Data ==========
    const subFieldsData = {
      "Art & Design": {
        question: "Which of these activities expresses you the most and resembles your way of expression or creativity? (Choose only one)",
        options: [
          { label:"I love creating shapes for tools and products used in daily life — like smart devices or practical furniture pieces.", field:"Product Design" },
          { label:"I enjoy designing interior spaces for homes or offices, coordinating colors and furniture.", field:"Interior Design" },
          { label:"I am passionate about fashion and designing modern or traditional clothes artistically.", field:"Fashion" },
          { label:"I love designing patterns, fabrics, and various textiles, and imagine printing them on clothes or furnishings.", field:"Textiles" },
          { label:"I enjoy taking photos and documenting moments with artistic shots that express emotions.", field:"Photography" },
          { label:"I excel at drawing logos, posters, and designing visual elements for brands.", field:"Graphic Design" },
          { label:"I enjoy designing app and website interfaces or interactive digital content.", field:"Digital Design" },
          { label:"I love drawing, coloring, and creating free artworks with strong messages.", field:"Arts Practice" },
          { label:"I have ideas for designing unique shoes that combine beauty, comfort, and innovation.", field:"Footwear Design" },
        ]
      },
      "Creative Media": {
        question:"Which of these activities or fields in media and creative production resembles you the most? (Choose only one)",
        options:[
          { label:"I love working in sound recording, producing sound effects, or improving sound quality.", field:"Sound Media" },
          { label:"I am passionate about film directing, shooting movies, and writing scripts.", field:"Film" },
          { label:"I enjoy working in television, whether behind the camera or on screen.", field:"Television" },
          { label:"I enjoy writing articles, preparing press reports, or engaging with public opinion issues.", field:"Journalism" },
          { label:"I am excited by producing imaginary visual scenes like explosions or virtual characters.", field:"Visual Effects" },
          { label:"I love designing video games, whether at the idea, graphics, or programming level.", field:"Game Development" },
          { label:"I excel at animating visual elements and creating short videos using animation.", field:"Motion Graphic" },
          { label:"I am passionate about artistic photography and documenting moments through the camera lens.", field:"Media Photography" },
        ]
      },
      "Business Management": {
        question:"Which of these activities or skills resembles you the most and reflects your way of thinking or interests in daily life? (Choose only one)",
        options:[
          { label:"I enjoy analyzing numbers, preparing budgets, and reviewing financial reports with precision.", field:"Accounting & Finance" },
          { label:"I love planning long-term strategies, managing teams, and thinking about a comprehensive vision for the organization.", field:"Business Management" },
          { label:"I am passionate about launching new ideas, starting projects from scratch, and taking risks for success.", field:"Entrepreneurship & Small Business Management" },
          { label:"I find myself dealing with people, solving their problems in the workplace, and motivating them to perform better.", field:"Human Resource Management" },
          { label:"I love creating innovative marketing campaigns, understanding consumer behavior, and persuading people in an attractive way.", field:"Marketing" },
          { label:"I enjoy negotiating, managing the supply chain, and ensuring materials and services are available on time.", field:"Procurement & Supply Management" },
          { label:"I am curious about understanding laws, managing relationships between individuals or companies, and defending rights clearly.", field:"Law" }
        ]
      },
      "Digital Technologies": {
        question:"Which of these digital fields catches your attention and you want to excel in? (Choose only one)",
        options:[
          { label:"I am interested in understanding cloud infrastructure and developing smart and efficient storage solutions.", field:"Cloud Networking" },
          { label:"I enjoy analyzing large amounts of data to achieve intelligent results that help in decision-making.", field:"Data Analytics" },
          { label:"I am passionate about securing systems against attacks and protecting sensitive information.", field:"Cyber Security" },
          { label:"I find artificial intelligence amazing, and I love designing smart applications that learn and interact intelligently.", field:"Artificial Intelligence (AI) Solutions and Applications" },
          { label:"I enjoy managing digital content, interacting with clients professionally through digital means.", field:"Digital Communications Management" },
          { label:"I excel at using technology to support decision-making within organizations, achieving organizational change.", field:"Business Analytics and Change Management" },
          { label:"I love programming applications, designing comprehensive software solutions to solve user problems.", field:"Software Development and Programming" },
        ]
      },
      "Information Technology": {
        question:"Which of these technical aspects interests you the most and you feel you excel in or want to learn? (Choose only one)",
        options:[
          { label:"I love working with computers in general, learning basic programming, and troubleshooting operating system issues.", field:"General Computing" },
          { label:"I enjoy building complex software and designing software systems that work efficiently.", field:"Software Engineering" },
          { label:"I enjoy testing applications, discovering software bugs, and improving performance.", field:"Applications Development & Testing" },
          { label:"I love analyzing data to understand trends and make data-driven decisions.", field:"Data Analytics" },
          { label:"I am excited about building networks, managing communication between systems, and ensuring internet works smoothly.", field:"Network Engineering" },
          { label:"I am curious about discovering vulnerabilities, protecting systems from attacks, and securing digital information.", field:"Cyber Security" },
        ]
      },
      "Engineering": {
        question:"Which of these engineering fields resembles your way of thinking or catches your attention in the world around you? (Choose only one)",
        options:[
          { label:"I love the overall design of systems and solving multi-disciplinary problems comprehensively.", field:"General Engineering" },
          { label:"I am passionate about developing tools and equipment used in production lines and factories.", field:"Manufacturing Engineering" },
          { label:"I am interested in integrating electronics with mechanics to create smart and automated systems.", field:"Mechatronics" },
          { label:"I enjoy understanding how engines and moving parts work and developing precise machines.", field:"Mechanical" },
          { label:"I am interested in improving efficiency in production environments and analyzing production process flows.", field:"Operations Engineering" },
          { label:"I am interested in high-tech manufacturing, materials science, and semiconductors.", field:"Semiconductor Technologies" },
          { label:"I love designing integrated circuits used in smart devices or medical technology.", field:"Embedded Electronic Systems" },
          { label:"I love designing electrical and electronic circuits and solving power and control issues.", field:"Electrical & Electronic Engineering" }
        ]
      },
      "Construction Engineering": {
        question:"Which of these activities or roles in construction and urban development resembles you and makes you excited? (Choose only one)",
        options:[
          { label:"I love designing buildings, planning spaces, and following construction details from the beginning.", field:"Civil Engineering" },
          { label:"I am passionate about managing construction sites, ensuring the project is executed according to budget and schedule.", field:"Construction Management" },
          { label:"I enjoy architectural drawing and transforming ideas into 3D designs that show construction details.", field:"Architectural Technology" },
          { label:"I enjoy planning HVAC systems and ensuring comfortable environments inside buildings.", field:"Building Services Engineering – HVAC" },
          { label:"I love dealing with electrical systems inside buildings, such as lighting and safe wiring.", field:"Building Services Engineering – Electrical" },
          { label:"I am interested in space and land measurement, accurately determining boundaries using technical tools.", field:"Surveying" }
        ]
      },
      "Travel & Tourism": {
        question:"Which aspect of travel and tourism attracts you the most and you feel it suits your passion? (Choose only one)",
        options:[
          { label:"I dream of working in aviation or managing operations within airports and airlines.", field:"Aviation" },
          { label:"I love planning tours and experiences, ensuring customer satisfaction.", field:"Destination Management" },
          { label:"I enjoy organizing events and conferences that attract attendance and present a professional image.", field:"Events" },
          { label:"I am passionate about cultural heritage, shining a light on the history and culture of peoples.", field:"Innovation, Culture & Heritage" },
          { label:"I am interested in developing sustainable tourism, whether cultural or environmental, that respects sustainability.", field:"Sustainable Management" },
          { label:"I love working in tour operations, interacting with groups of tourists.", field:"Tour Operations" }
        ]
      },
      "Health & Social Care": {
        question:"What excites you the most in this field?",
        options:[
          { label:"I love working with people, providing health or mental support to those who need it, whether in community centers or medical environments, and I always strive to improve the quality of life of others.", field:"Integrated Health & Social Care Practice" }
        ]
      },
      "Esports": {
        question:"Which part of the esports and professional sports world excites you the most? (Choose only one)",
        options:[
          { label:"I love team competition, leading a team in major esports tournaments.", field:"Esports – General" },
          { label:"I enjoy managing the operations behind the scenes, ensuring events run efficiently.", field:"Operations Management" },
          { label:"I am interested in producing visual content for games, such as live streaming or creating professional videos.", field:"Production" },
          { label:"I care about the mental and physical health of athletes, providing support during training and tournaments.", field:"Athlete Support and Development" }
        ]
      },
      "Hospitality Management": {
        question:"What attracts you in the hospitality and hotel management field?",
        options:[
          { label:"I love planning unique experiences for guests, managing teams in hotels and restaurants, providing professional services that reflect professionalism and kindness, whether in local or global venues.", field:"Hospitality Management" }
        ]
      }
    };
// **## **// ========== نتائج المرحلة الثالثة ==========****
const resultsData = {
// Business Management
  "Accounting & Finance": `<div style="
  width:360px;
  height:670px;
  margin:auto;
  background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);
  border-radius:36px;
  box-shadow:0 12px 40px #0b6dc455;
  border:4px solid #f6b20c;
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:0;
  font-family:'Segoe UI', Arial, sans-serif;
  position:relative;
  overflow:hidden;
">
  <div style="
    width:100%; height:54px;
    background:linear-gradient(90deg,#f6b20c,#ffe28d);
    color:#fff; font-size:1.3em; font-weight:900;
    display:flex; align-items:center; justify-content:center;
    border-radius:36px 36px 0 0;
    letter-spacing:1.1px;
    text-align:center;">
    Your Perfect Major Based on Your Personality
  </div>

  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#0b6dc4; text-shadow:0 4px 14px #0b6dc444;">🚀</span>
  </div>

  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Entrepreneurship & Small Business Management
    </div>
  </div>

  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why This Major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      You love new ideas and turning them into real projects.
    </div>
  </div>

  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Start from <span style='color:#e68a00;font-weight:bold;'>£26,000</span> to <span style='color:#28a745;font-weight:bold;'>£32,000</span> per year. Success can raise your income above <span style='color:#28a745;font-weight:bold;'>£100,000</span>.
    </div>
  </div>

  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      UK universities teach you how to succeed in business.
    </div>
  </div>

  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Professional Future</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      You could start a company and make an impact worldwide.
    </div>
  </div>

  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 Start your project and change the world!
  </div>

  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="
      text-decoration:none; background:#f6b20c;
      padding:8px 16px; color:white;
      font-weight:800; border-radius:22px; font-size:0.92em;
      box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,
"Operations Management":`
<div id="resultImageCard" style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Segoe UI', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.3em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Perfect Major Based on Your Personality
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#e68a00; text-shadow:0 4px 14px #f6b20c44;">🗂️</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Esports – Operations Management
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why This Major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      You excel at organizing tournaments and digital events.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Salaries start from <span style='color:#e68a00;font-weight:bold;'>£32,000</span> to <span style='color:#28a745;font-weight:bold;'>£70,000</span> per year and grow with experience.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      UK programs offer practical training in major esports events.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Professional Future</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Become a global tournament organizer seen by millions.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You're the Master of Digital Events!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="
      text-decoration:none; background:#f6b20c;
      padding:8px 16px; color:white;
      font-weight:800; border-radius:22px; font-size:0.92em;
      box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

"Production":`
<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Segoe UI', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.3em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Perfect Major Based on Your Personality
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#e68a00; text-shadow:0 4px 14px #f6b20c44;">🏅</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Esports – Player Support and Development
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      You help players grow and reach their best performance.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Salaries start from <span style='color:#e68a00;font-weight:bold;'>£30,000</span> to <span style='color:#28a745;font-weight:bold;'>£65,000</span> per year and grow with your team’s success.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      UK programs combine sports, psychology, and technology.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Future</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Become a coach or consultant for top esports teams.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You build digital champions!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="
      text-decoration:none; background:#f6b20c;
      padding:8px 16px; color:white;
      font-weight:800; border-radius:22px; font-size:0.92em;
      box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

"Business Management": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.3em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Ideal Major Based on Your Personality
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#0b6dc4; text-shadow:0 4px 14px #0b6dc444;">🧑‍💼</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Business Management
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      You have leadership skills and a vision for success in business.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Salaries start from <span style='color:#e68a00;font-weight:bold;'>£29,000</span> to <span style='color:#28a745;font-weight:bold;'>£70,000</span> per year, with fast growth.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      We support your admission to top UK business schools.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career Future</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      You can become a leader in international companies.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 Leadership begins with a bold step!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div
`,

  "Entrepreneurship & Small Business Management": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.3em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Perfect Major Based on Your Personality
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#0b6dc4; text-shadow:0 4px 14px #0b6dc444;">🚀</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Entrepreneurship & Small Business Management
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      You love turning new ideas into real projects.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Start from <span style='color:#e68a00;font-weight:bold;'>£26,000</span> to <span style='color:#28a745;font-weight:bold;'>£32,000</span>. Success can bring over <span style='color:#28a745;font-weight:bold;'>£100,000</span>.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Learn from leading entrepreneurs at top UK universities.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career Future</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Become a founder of an innovative startup.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 Start your project and change the world!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Human Resource Management": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.3em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Perfect Major Based on Your Personality
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#0b6dc4; text-shadow:0 4px 14px #0b6dc444;">🤝</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Human Resource Management
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your people skills help you build strong teams and develop talent.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Salaries start from <span style='color:#e68a00;font-weight:bold;'>£26,000</span> to <span style='color:#28a745;font-weight:bold;'>£60,000</span> per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      UK universities teach the latest HR skills for global workplaces.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career Future</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Become an HR manager in leading companies.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You make a difference at work!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Marketing": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.3em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Ideal Major Based on Your Personality
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#e68a00; text-shadow:0 4px 14px #f6b20c44;">📢</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Marketing
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your creativity helps you design campaigns for the digital age.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Salaries start from <span style='color:#e68a00;font-weight:bold;'>£25,000</span> to <span style='color:#28a745;font-weight:bold;'>£50,000</span> per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK is a hub for marketing innovation and top universities.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career Future</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Become a marketing manager leading global campaigns.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 Be the success of brands!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  // إضافة التخصصات الجديدة
  "Procurement & Supply Management": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.3em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Ideal Major Based on Your Personality
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#28a745; text-shadow:0 4px 14px #0b6dc444;">🚚</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Procurement & Supply Management
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your organization skills help you manage global supply chains.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Salaries start from <span style='color:#e68a00;font-weight:bold;'>£28,000</span> to <span style='color:#28a745;font-weight:bold;'>£65,000</span> per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      UK universities offer advanced supply chain programs.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career Future</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Become a global supply chain manager.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 Your success drives the markets!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Law": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.3em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Ideal Major Based on Your Personality
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#0b6dc4; text-shadow:0 4px 14px #0b6dc444;">⚖️</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Law
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your passion for justice helps you make a difference in society.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Salaries start from <span style='color:#e68a00;font-weight:bold;'>£28,000</span> to <span style='color:#28a745;font-weight:bold;'>£140,000</span> per year, depending on experience.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      UK law schools are world-renowned with great training.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career Future</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Become a lawyer or judge making real impact.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 Justice is your mission, and the future awaits you!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  // تخصصات تقنية المعلومات
  "General Computing": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Ideal Major
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#0b6dc4; text-shadow:0 4px 14px #0b6dc444;">💻</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      General Computing
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your technical skills let you solve problems in any IT field.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Salaries start from <span style='color:#e68a00;font-weight:bold;'>£30,000</span> to <span style='color:#28a745;font-weight:bold;'>£65,000</span> per year, depending on experience.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK offers top computing programs and a tech-driven environment.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career Future</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Become an IT specialist in global tech companies.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 Technology in your hands, and the future ahead!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Software Engineering": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Ideal Major
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#e68a00; text-shadow:0 4px 14px #f6b20c44;">🧑‍💻</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Software Engineering
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      You love building software and digital solutions.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Salaries start from <span style='color:#e68a00;font-weight:bold;'>£35,000</span> to <span style='color:#28a745;font-weight:bold;'>£75,000</span> per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK offers top software engineering programs.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career Future</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Become a tech leader creating global apps.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 Programming is the future!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Applications Development & Testing": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#0b6dc4; text-shadow:0 4px 14px #0b6dc444;">🛠️</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      General Engineering
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your innovative mind combines engineering fields to solve big challenges.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £30,000 to £70,000 per year, increasing with experience.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK has top engineering universities and great opportunities.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Become a project leader developing creative engineering solutions.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 Your engineering shapes the future!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Data Analytics": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#28a745; text-shadow:0 4px 14px #0b6dc444;">🌐</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Network Engineering
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      You build and manage digital networks for the future.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £32,000 to £72,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      UK universities offer top network engineering programs.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Become a network manager in major tech firms.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You are the digital bridge!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Network Engineering": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#e68a00; text-shadow:0 4px 14px #f6b20c44;">🛡️</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Cyber Security
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      You protect data and digital systems from threats.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £40,000 to £90,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK is a top destination for cyber security studies.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Become a cyber security expert for global firms.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 Be the guardian of the digital world!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Cyber Security": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#28a745; text-shadow:0 4px 14px #0b6dc444;">📱</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Applications Development & Testing
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      You care about quality and details in software.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £32,000 to £68,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      UK programs offer hands-on experience in app development.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Lead app development teams in top companies.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 Your apps build the future!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  // تخصصات الهندسة
  "General Engineering": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#0b6dc4; text-shadow:0 4px 14px #0b6dc444;">📈</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Data Analytics
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      You turn data into smart decisions for success.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £35,000 to £70,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK is a leader in data analytics education.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Become a data manager in global companies.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 Data is your power!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Manufacturing Engineering": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#28a745; text-shadow:0 4px 14px #0b6dc444;">☁️</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Cloud Networking
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your passion for cloud tech and networks drives digital transformation.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £38,000 to £75,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK leads in cloud tech with advanced programs.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Become a cloud expert managing global digital infrastructure.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You are the cloud of the digital future!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Mechatronics": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#e68a00; text-shadow:0 4px 14px #f6b20c44;">🧠</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Artificial Intelligence
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      You love developing smart systems and AI solutions.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £45,000 to £95,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK is a global leader in AI education and research.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Become an AI expert shaping future technology.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You are the mind of the digital future!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Mechanical": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#0b6dc4; text-shadow:0 4px 14px #0b6dc444;">📡</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Digital Communications Management
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your digital skills help lead modern communication strategies.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £28,000 to £55,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK offers advanced digital communications programs.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Become a digital communications manager in global firms.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You are the voice of the digital future!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  // تخصصات التقنيات الرقمية
  "Cloud Networking": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#e68a00; text-shadow:0 4px 14px #f6b20c44;">🎨</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Graphic Design
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your creativity shapes unique visual identities.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £22,000 to £45,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK is a hub for creative arts and design.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Become a renowned designer for global brands.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You are a visual identity artist!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Artificial Intelligence (AI) Solutions and Applications": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#28a745; text-shadow:0 4px 14px #0b6dc444;">📸</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Photography
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your artistic eye tells stories through images.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £20,000 to £50,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK offers top photography programs and studios.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Become a professional photographer for global media or your own studio.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You tell stories through the lens!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Digital Communications Management": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#0b6dc4; text-shadow:0 4px 14px #0b6dc444;">👗</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Fashion Design
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your style and passion for fashion let you create modern, elegant designs.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £18,000 to £60,000 per year, based on fame and success.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK is a global fashion capital with top design schools in London.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Become a global designer at major fashion weeks in London, Paris, and Milan.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You are the designer of tomorrow!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  // تخصصات الإعلام الإبداعي
  "Graphic Design": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#e68a00; text-shadow:0 4px 14px #f6b20c44;">🎬</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Film Production
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your passion for cinema helps you tell stories visually and creatively.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £22,000 to £80,000 per year, depending on project success.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK is home to world-class film schools and studios.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Become an award-winning director making films for millions.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You create cinematic dreams!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Photography": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#0b6dc4; text-shadow:0 4px 14px #0b6dc444;">✈️</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Aviation Management
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your passion for aviation prepares you to lead airports and airlines.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £28,000 to £75,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK offers top aviation management programs and airport internships.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Become a manager at a major airport or global airline.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You lead the skies!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Fashion": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#28a745; text-shadow:0 4px 14px #0b6dc444;">🏨</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Hospitality Management
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your love for service and guest experiences makes you a hospitality leader.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £24,000 to £55,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK offers top hospitality programs and internships at global hotels.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Become a general manager at a luxury hotel or resort.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You are a global hospitality ambassador!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Film": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#e68a00; text-shadow:0 4px 14px #f6b20c44;">💖</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Health & Social Care
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your kindness and desire to help others make you a caring professional.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £22,000 to £45,000 per year, with extra benefits.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK offers top health and social care programs with practical training.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Become a care provider making a real difference in people's lives.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You are an angel of care!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  // تخصصات السياحة والضيافة
  "Aviation": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#0b6dc4; text-shadow:0 4px 14px #0b6dc444;">🎮</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Esports Management
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your passion for gaming and competition lets you lead esports teams and tournaments.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £25,000 to £60,000 per year in a fast-growing industry.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK offers modern esports programs and advanced training facilities.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Become a global esports team manager or major tournament organizer.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You are a digital sports champion!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Hospitality Management": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#28a745; text-shadow:0 4px 14px #0b6dc444;">🔧</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Operations Engineering
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      You improve efficiency and analyze processes for better production systems.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £33,000 to £70,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK offers advanced operations engineering programs with practical industry training.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Become an operations manager improving efficiency in global industries.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You boost efficiency and productivity!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Integrated Health & Social Care Practice": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#e68a00; text-shadow:0 4px 14px #f6b20c44;">⚡</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Electrical & Electronic Engineering
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your passion for circuits and electronics helps you create advanced tech solutions.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £32,000 to £75,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK leads in electrical engineering with advanced labs and research.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Become an engineer developing renewable energy or advanced circuits.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You power the world with electronics!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Esports – General": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#0b6dc4; text-shadow:0 4px 14px #0b6dc444;">🏗️</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Civil Engineering
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your vision for building the future helps you design infrastructure and shape cities.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £28,000 to £65,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK has top civil engineering universities and large-scale training projects.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Design bridges, roads, and buildings serving millions.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You build the future of civilization!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  // المزيد من تخصصات الهندسة
  "Operations Engineering": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#28a745; text-shadow:0 4px 14px #0b6dc444;">👷</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Construction Management
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your leadership and project skills prepare you to manage large construction sites.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £30,000 to £70,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK offers top construction management programs with global project training.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Lead major projects like skyscrapers and smart cities.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You lead the projects of tomorrow!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Electrical & Electronic Engineering": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#dc3545; text-shadow:0 4px 14px #dc354544;">🎬</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Creative Media Production
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your creativity in digital content makes you a standout media producer.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £22,000 to £55,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK is home to major media companies and world-class studios.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Produce inspiring content for audiences worldwide.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You inspire with your content!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  // تخصصات هندسة البناء والتشييد
  "Civil Engineering": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#6f42c1; text-shadow:0 4px 14px #6f42c144;">📺</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Television Production
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your love for visual media makes you an expert in TV program and series production.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £24,000 to £60,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK is home to the BBC and top TV production companies with unique training.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Produce TV shows and series watched by millions.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You are a star of TV production!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Construction Management": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#17a2b8; text-shadow:0 4px 14px #17a2b844;">📰</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Journalism
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your passion for news and writing helps you deliver the truth to the world.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £20,000 to £50,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK is home to top newspapers and offers real newsroom training.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Become an investigative reporter or editor at a leading newspaper.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You are the voice of truth!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  // المزيد من تخصصات الإعلام الإبداعي
  "Creative Media Production": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#fd7e14; text-shadow:0 4px 14px #fd7e1444;">🏠</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Interior Design
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your eye for beauty and space lets you create stunning interiors.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £22,000 to £50,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK leads in interior design with workshops in top studios.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Transform hotels and luxury homes into architectural masterpieces.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You are an artist of beautiful spaces!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Television Production": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#e83e8c; text-shadow:0 4px 14px #e83e8c44;">🎨</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Animation
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your drawing skills and love for characters make you a pro animator.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £25,000 to £60,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK is home to top animation studios and advanced techniques.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Create characters that delight audiences in global films.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You are a wizard of animation!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Journalism": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#6f42c1; text-shadow:0 4px 14px #6f42c144;">🔬</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Semiconductor Technologies
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your passion for advanced tech and electronics prepares you to be a future tech expert.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £35,000 to £80,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK leads in semiconductor research with advanced labs.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Develop chips powering smartphones and computers.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You engineer the technologies of tomorrow!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  // المزيد من تخصصات الفن والتصميم
  "Interior Design": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#17a2b8; text-shadow:0 4px 14px #17a2b844;">🔧</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Embedded Electronic Systems
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your love for programming and electronics makes you an expert in smart embedded systems.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £32,000 to £70,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK offers advanced programs with modern projects in embedded systems.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Develop smart systems for cars, IoT, and robotics.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You build smart systems!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Animation": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#fd7e14; text-shadow:0 4px 14px #fd7e1444;">🏛️</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Architectural Technology
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      You blend architectural creativity with tech to design smart, sustainable buildings.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £28,000 to £60,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK offers leading architectural tech programs with advanced applications.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Design smart, sustainable buildings for the future.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You design smart buildings!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  // المزيد من تخصصات الهندسة المتقدمة
  "Semiconductor Technologies": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#28a745; text-shadow:0 4px 14px #28a74544;">🌡️</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Building Services Engineering (HVAC)
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your interest in heating and ventilation lets you design comfortable, energy-saving environments.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £30,000 to £65,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK leads in sustainable building and advanced HVAC systems.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Design climate control systems for smart, sustainable buildings.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You engineer comfort and sustainability!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Embedded Electronic Systems": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#ffc107; text-shadow:0 4px 14px #ffc10744;">⚡</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Building Services Engineering (Electrical)
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your expertise in electrical systems lets you design smart building networks.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £31,000 to £68,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK offers advanced programs in smart and sustainable building electrical systems.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Design smart electrical systems for future cities.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You engineer smart energy!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  // تخصصات التكنولوجيا المعمارية والبناء
  "Architectural Technology": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#20c997; text-shadow:0 4px 14px #20c99744;">🗺️</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Surveying
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your precision and love for geotech make you an expert in surveying and mapping.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £26,000 to £55,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK offers advanced surveying and geomatics programs with modern tech.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Use the latest tech to map cities and major projects.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You map the future!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Building Services Engineering (HVAC)": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#007bff; text-shadow:0 4px 14px #007bff44;">✈️</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Aviation
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your passion for aviation and tech prepares you for a global career.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £35,000 to £80,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK is a global aviation hub with hands-on training at major airports.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Work for top airlines or as a professional pilot.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You soar to success!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Building Services Engineering (Electrical)": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#fd7e14; text-shadow:0 4px 14px #fd7e1444;">🏖️</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Destination Management
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your love for travel and management skills help you develop top tourist destinations.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £24,000 to £55,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK offers top tourism management programs and internships at famous destinations.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Manage a world-class destination welcoming millions of visitors.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You create amazing travel experiences!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  // تخصصات إضافية
  "Surveying": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#e83e8c; text-shadow:0 4px 14px #e83e8c44;">🎉</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Events Management
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your creativity and love for events make you an expert organizer.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £22,000 to £50,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK is home to major global events and offers practical conference and exhibition programs.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Organize major international events, conferences, and festivals.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You create beautiful memories!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Aviation": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#6f42c1; text-shadow:0 4px 14px #6f42c144;">🏛️</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Innovation, Culture & Heritage
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your passion for culture and creativity helps preserve heritage in innovative ways.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £23,000 to £48,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK is home to top museums and heritage sites with leading heritage management programs.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Manage a world-class museum or preserve cultural heritage for future generations.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You are a guardian of culture!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  // المزيد من تخصصات السياحة
  "Destination Management": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#28a745; text-shadow:0 4px 14px #28a74544;">🌱</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Sustainable Management
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your passion for sustainability leads organizations toward a greener future.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £26,000 to £58,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK leads in sustainability with advanced environmental management programs.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Become a sustainability manager leading green transformation in industry.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You are a leader for a greener future!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Events": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#17a2b8; text-shadow:0 4px 14px #17a2b844;">🗺️</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Tour Operations
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your love for travel and organization lets you create amazing travel experiences.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £23,000 to £52,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK offers comprehensive tour operations programs with practical training at leading travel companies.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Design unforgettable travel experiences for people worldwide.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You create travel adventures!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Innovation, Culture & Heritage": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#dc3545; text-shadow:0 4px 14px #dc354544;">🎨</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Product Design
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your creativity and user focus help you design products that improve lives.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £25,000 to £55,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK is a leader in product design with workshops at top global companies.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Design products for leading tech firms like Apple or Google.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You create the products of the future!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  // المزيد من التخصصات
  "Sustainable Management": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#6f42c1; text-shadow:0 4px 14px #6f42c144;">🧵</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Textiles
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your creativity and love of fabrics and color make you an expert in textile design and production.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £22,000 to £48,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK offers advanced textile design programs with modern, sustainable techniques.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Become a textile designer creating sustainable and smart fabrics for the future.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You are an artist of fabrics and color!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Tour Operations": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#007bff; text-shadow:0 4px 14px #007bff44;">💻</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Digital Design
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your digital creativity and technical skills help you design amazing, innovative experiences.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £26,000 to £58,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK leads in digital design, offering advanced UX/UI and interactive design programs.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Become a digital designer creating apps and websites used by millions.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You create digital experiences!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  // المزيد من تخصصات الفن والتصميم
  "Product Design": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#e83e8c; text-shadow:0 4px 14px #e83e8c44;">🎭</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Arts Practice
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your artistic talent lets you express beauty and emotion through color and form.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £20,000 to £45,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK is home to great artists, famous galleries, and top academies.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Exhibit your art in world-class galleries and inspire generations.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You paint the beauty of life!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Textiles": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#fd7e14; text-shadow:0 4px 14px #fd7e1444;">👠</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Footwear Design
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your creativity and passion for fashion help you design stylish, comfortable footwear.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £23,000 to £52,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK offers specialized footwear design programs with workshops at top brands.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Design for global brands or launch your own footwear label.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You create modern footwear!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Digital Design": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#20c997; text-shadow:0 4px 14px #20c99744;">🎵</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Sound Media
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your musical sense and technical skills help you produce creative sound content.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £24,000 to £55,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK is home to top sound studios and advanced audio production techniques.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Become a sound producer for leading music and media companies.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You are a wizard of sound and music!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  // التخصصات الأخيرة المتبقية
  "Arts Practice": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#6f42c1; text-shadow:0 4px 14px #6f42c144;">✨</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Visual Effects
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your creativity and tech skills let you create amazing worlds in film and games.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £28,000 to £65,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK is home to top VFX studios and advanced CGI technology.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Become a VFX expert in Hollywood films and global games.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You are a visual effects wizard!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Footwear Design": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#007bff; text-shadow:0 4px 14px #007bff44;">🎮</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Game Development
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your passion and coding skills let you create games enjoyed by millions.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £30,000 to £70,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK is home to leading game studios and advanced programs.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Work at top studios or start your own game company.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You create gaming worlds!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Sound Media": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#dc3545; text-shadow:0 4px 14px #dc354544;">🎬</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Motion Graphic
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your creativity in design and animation lets you create stunning motion graphics.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £26,000 to £58,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK offers the latest animation technologies and top studios.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Work as a motion designer in leading ad and production companies.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You bring creativity to motion!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Visual Effects": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#ffc107; text-shadow:0 4px 14px #ffc10744;">📸</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Media Photography
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your talent and artistic eye capture powerful stories through images.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £22,000 to £48,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK is home to top photojournalists and specialized programs.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Become a media photographer documenting world events.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You tell stories with images!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Game Development": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#17a2b8; text-shadow:0 4px 14px #17a2b844;">📊</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Business Analytics & Change Management
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your analytical and strategic thinking helps lead change in big companies.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £35,000 to £75,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK teaches the latest analytics and change management for top firms.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Become a strategic analyst or change manager at global companies.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You lead transformation!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

  "Motion Graphic": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.1em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;text-align:center;">
    Your Major Match
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#28a745; text-shadow:0 4px 14px #28a74544;">💻</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Software Development & Programming
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why this major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Your tech skills and problem-solving let you build apps and systems for millions.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      £32,000 to £80,000 per year.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🎓 Study in the UK</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      The UK offers the latest in programming and is home to top tech firms.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Career</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.5; text-align:left;">
      Work at top tech companies or start your own software business.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You build the digital future!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,
"Media Photography": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.3em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;">
    Your Perfect Major Based on Your Personality
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#ffc107; text-shadow:0 4px 14px #ffc10744;">📸</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Media Photography – Media Photography
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why This Major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.6; text-align:right;">
      Your talent in photography and artistic sense qualifies you to document events and stories with expressive and impactful images.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.6; text-align:right;">
      Salaries start from <span style='color:#e68a00;font-weight:bold;'>22,000</span> to <span style='color:#28a745;font-weight:bold;'>48,000</span> British pounds annually.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">�� Study in Britain</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.6; text-align:right;">
      Britain is home to the most famous photojournalists and offers specialized programs in media photography.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Professional Future</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.6; text-align:right;">
      We see you as a photojournalist or media photographer documenting important events for the world.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You are the storyteller through images!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

"Business Analytics and Change Management": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.3em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;">
    Your Perfect Major Based on Your Personality
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#17a2b8; text-shadow:0 4px 14px #17a2b844;">📊</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Business Analytics & Change Management – Business Analysis and Change Management
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why This Major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.6; text-align:right;">
      Your ability to analyze and think strategically qualifies you to lead change in major companies.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.6; text-align:right;">
      Salaries start from <span style='color:#e68a00;font-weight:bold;'>35,000</span> to <span style='color:#28a745;font-weight:bold;'>75,000</span> British pounds annually.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">�� Study in Britain</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.6; text-align:right;">
      Britain offers the latest methodologies in analysis and change management in major global companies.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Professional Future</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.6; text-align:right;">
      We see you as a strategic analyst or change manager in multinational companies.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You are the leader of transformation and development!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`,

"Software Development and Programming": `<div style="width:360px;height:670px;margin:auto;background:linear-gradient(180deg,#ffffff 70%, #f3f7fa 100%);border-radius:36px;box-shadow:0 12px 40px #0b6dc455;border:4px solid #f6b20c;display:flex;flex-direction:column;align-items:center;padding:0;font-family:'Cairo', Arial, sans-serif;position:relative;overflow:hidden;">
  <div style="width:100%; height:54px;background:linear-gradient(90deg,#f6b20c,#ffe28d);color:#fff; font-size:1.3em; font-weight:900;display:flex; align-items:center; justify-content:center;border-radius:36px 36px 0 0;letter-spacing:1.1px;">
    Your Perfect Major Based on Your Personality
  </div>
  <div style="margin-top:16px; margin-bottom:6px;">
    <span style="font-size:52px; color:#28a745; text-shadow:0 4px 14px #28a74544;">💻</span>
  </div>
  <div style="width:90%; margin-bottom:10px;">
    <div style="color:#0b6dc4; font-size:1em; font-weight:600; text-align:center;">
      Software Development & Programming – Software Development and Programming
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🧩 Why This Major?</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.6; text-align:right;">
      Your technical skills and passion for problem-solving qualify you to build applications and systems that serve millions.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">💰 Expected Salary</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.6; text-align:right;">
      Salaries start from <span style='color:#e68a00;font-weight:bold;'>32,000</span> to <span style='color:#28a745;font-weight:bold;'>80,000</span> British pounds annually.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">�� Study in Britain</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.6; text-align:right;">
      Britain offers the latest programming technologies and hosts the most famous global technology companies.
    </div>
  </div>
  <div style="width:90%; margin-bottom:7px; background:#f9f9fc; padding:7px 12px; border-radius:14px;">
    <div style="color:#444; font-size:1.03em; font-weight:800; margin-bottom:2px; text-align:center;">🚀 Your Professional Future</div>
    <div style="color:#2b3e54; font-size:0.93em; line-height:1.6; text-align:right;">
      We see you as a developer in major technology companies or founding your own tech company.
    </div>
  </div>
  <div style="color:#0b6dc4; font-size:1.04em; font-weight:800; text-align:center; margin:10px 0 2px 0;">
    🌟 You are building the digital future!
  </div>
  <div style="margin-top:2px; margin-bottom:5px; display:flex; flex-direction:column; align-items:center;">
    <a href="#" onclick="showStudyCalculator(); return false;" style="text-decoration:none; background:#f6b20c; padding:8px 16px; color:white; font-weight:800; border-radius:22px; font-size:0.92em; box-shadow:0 2px 8px #f6b20c88;">
      Start Your University Journey Now
    </a>
    <div style="font-size:0.75em; color:#666; margin-top:4px; letter-spacing:0.3px;">
      isgateway.org
    </div>
  </div>
</div>`
};
// ========== حالة الاختبار ==========
let quizState = {
  currentStage: 1,
  currentQ: 0,
  answers: [],
  reducedIndexes: [],
  mainFinalField: "",
  history: [],
  detailedField: "",
  finalMajor: "",
  result: "",
userEmail: "" //
};

// ========== دوال واجهة المستخدم ==========
// Function to start the quiz
function startQuiz() {
  document.getElementById('welcomeSection').style.display = 'none';
  document.getElementById('quizSection').style.display = 'block';
}

function setProgress(percent) {
  document.getElementById('progressBar').style.width = percent + "%";
}
function saveHistory() {
  quizState.history.push(JSON.parse(JSON.stringify(quizState)));
}
function goBack() {
  if (quizState.history.length === 0) return;
  quizState = quizState.history.pop();
  renderQuiz();
}
function renderQuiz() {
  document.getElementById('backBtn').style.display = quizState.history.length ? "inline-block" : "none";
  if (quizState.currentStage === 1) {
    renderStage1();
  }
  else if (quizState.currentStage === 2) {
    renderStage2();
  }
  else if (quizState.currentStage === 3) {
    renderResult();
  }
}

function renderStage1() {
  let qIndex = quizState.currentQ;
  let question = questionsP1[qIndex];
  let options;
  if (qIndex === 0) {
    options = mainOptions.map(opt => opt.label);
    quizState.reducedIndexes = mainOptions.map((_, i) => i);
  } else {
    options = quizState.reducedIndexes.map(idx => optionsTextsP1[qIndex][idx]);
  }

  setProgress(Math.floor((qIndex / questionsP1.length) * 100));
let html = `
  <div class="main-question">${question}</div>
  <div class="stage-label">Step 1</div>
  ${qIndex === 3 ? '<div class="note">Note: Select only one option with "Yes"—choose the one that fits you best.</div>' : ""}
  <div id="optionsArea"></div>
  <button class="btn-main" onclick="submitStage1Q()" id="nextBtn" disabled>Next</button>
`;
  document.getElementById('quizContent').innerHTML = html;
  renderOptions(options, qIndex);
}
function renderOptions(options, qIndex) {
  let html = "";
  options.forEach((option, i) => {
    html += `
      <div class="option" id="opt${i}">
        <span>${option}</span>
        <div class="answers-bar" id="ans${i}">
          <button onclick="choose('Yes',${i}); event.stopPropagation();" id="btnYes${i}">Yes</button>
          <button onclick="choose('Sometimes',${i}); event.stopPropagation();" id="btnMaybe${i}">Sometimes</button>
          <button onclick="choose('No',${i}); event.stopPropagation();" id="btnNo${i}">No</button>
        </div>
      </div>
    `;
  });
  document.getElementById('optionsArea').innerHTML = html;
if (!quizState.answers[qIndex] || quizState.answers[qIndex].length !== options.length) {
  quizState.answers[qIndex] = Array(options.length).fill().map(() => ({answer: ""}));
}
quizState.answers[qIndex].forEach((ans, i) => {
  highlightAnswer(i, ans.answer);
});
}
function choose(val, idx) {
  let qIndex = quizState.currentQ;
  if (qIndex === 3 && val === "Yes") {
    // إذا حاول المستخدم اختيار "نعم" لخيار جديد، يجب جعل كل الخيارات الأخرى "لا"
    quizState.answers[qIndex] = quizState.answers[qIndex].map(() => ({answer: "No"}));
    quizState.answers[qIndex][idx] = {answer: "Yes"};
  } else if (qIndex === 3 && val !== "Yes" && quizState.answers[qIndex][idx].answer === "Yes") {
    // إذا ضغط المستخدم على خيار آخر (غير نعم)، فقط بدّل القيمة
    quizState.answers[qIndex][idx] = {answer: val};
  } else {
    // الأسئلة الأخرى تعمل بشكل طبيعي (يمكن نعم لأكثر من خيار)
    quizState.answers[qIndex][idx] = {answer: val};
  }
  // تحقق الإجابة كاملة
  let allAnswered = quizState.answers[qIndex].every(ans => ans.answer !== "");
  // في السؤال الرابع: تحقق أن هناك فقط "نعم" واحدة
  if (qIndex === 3) {
    let yesCount = quizState.answers[qIndex].filter(ans => ans.answer === "Yes").length;
    allAnswered = allAnswered && yesCount === 1;
  }
  document.getElementById('nextBtn').disabled = !allAnswered;
  // حدث المظهر دائماً
  quizState.answers[qIndex].forEach((ans, i) => highlightAnswer(i, ans.answer));
}
function highlightAnswer(idx, val) {
  ["Yes", "Maybe", "No"].forEach(type => {
    let btn = document.getElementById(`btn${type}${idx}`);
    if (btn) btn.classList.remove("selected");
  });
  if (val === "Yes") document.getElementById(`btnYes${idx}`).classList.add("selected");
  else if (val === "Sometimes") document.getElementById(`btnMaybe${idx}`).classList.add("selected");
  else if (val === "No") document.getElementById(`btnNo${idx}`).classList.add("selected");
}

function submitStage1Q() {
  saveHistory();
  let qIndex = quizState.currentQ;
  let yesArr = [];
  quizState.answers[qIndex].forEach((ans, i) => {
    if (ans.answer === "Yes") yesArr.push(quizState.reducedIndexes[i]);
  });

// If we are at the last question (the fourth one)
if (qIndex === 3) {
  if (yesArr.length === 1) {
    quizState.mainFinalField = mainOptions[yesArr[0]].field;
    quizState.currentStage = 2;
    setProgress(90);
    renderQuiz();
    return;
  } else {
    // Here, we only display a text message on the page, no alert or dialog box.
    let note = document.querySelector('.note');
    if (note) note.innerHTML = 'Please select only one option that contains the word "Yes" to continue the quiz.';
    return;
  }
}

  // في الأسئلة الأولى (0-2): إذا كان هناك أكثر من خيار "نعم"، قلّص الخيارات وانتقل للسؤال التالي
  if (qIndex < 3 && yesArr.length > 1) {
    quizState.currentQ++;
    quizState.reducedIndexes = yesArr;
    renderQuiz();
    return;
  }

  // في أي سؤال قبل الأخير، إذا كان هناك خيار واحد "نعم" فقط، انتقل مباشرة للمرحلة الثانية
  if (qIndex < 3 && yesArr.length === 1) {
    quizState.mainFinalField = mainOptions[yesArr[0]].field;
    quizState.currentStage = 2;
    setProgress(90);
    renderQuiz();
    return;
  }

  // إذا لم تتحقق أي حالة أعلاه، لا تفعل شيء (لن يتم تفعيل زر التالي أساسًا)
}

function renderStage2() {
  let data = subFieldsData[quizState.mainFinalField];
  if (!data) {
    quizState.result = "An error occurred, the specialization field was not found!";
    quizState.currentStage = 3;
    renderQuiz();
    return;
  }
  setProgress(95);
  document.getElementById('quizContent').innerHTML = `
    <div class="main-question">${data.question}</div>
    <div class="stage-label">المرحلة الثانية</div>
    <div id="subOptions"></div>
    <button class="btn-main" onclick="submitStage2()" id="nextBtn" disabled>عرض النتيجة</button>
  `;
  renderSubOptions(data.options);
}

function renderSubOptions(options) {
  let html = "";
  options.forEach((opt, i) => {
    html += `<div class="option" id="subOpt${i}" onclick="chooseSub(${i})">${opt.label}</div>`;
  });
  document.getElementById('subOptions').innerHTML = html;
}

function chooseSub(idx) {
  document.querySelectorAll('.option').forEach(el => el.classList.remove('selected'));
  document.getElementById('subOpt' + idx).classList.add('selected');
  quizState.detailedField = subFieldsData[quizState.mainFinalField].options[idx].field;
  document.getElementById('nextBtn').disabled = false;
}

function submitStage2() {
  saveHistory();
  quizState.finalMajor = quizState.detailedField;
  quizState.currentStage = 3;
  renderQuiz();
}



function renderResult() {
  setProgress(100);
  let major = quizState.finalMajor;
  let cardHTML = resultsData[major] || `<div style="text-align:center;padding:20px;">Selected major: ${major || "—"}. No dedicated card found yet.</div>`;

  // If the email has not been entered yet, show the email form
  if (!quizState.userEmail) {
    document.getElementById('quizContent').innerHTML = `
      <h2>Your result is waiting!</h2>
      <div class="result-section">
        Please enter your email to view the result.
        <br><br>
        <input type="email" id="emailInput" placeholder="example@email.com" style="width:95%;padding:8px;font-size:1em;margin:10px 0;border-radius:6px;border:1px solid #ccc;text-align:left;direction:ltr;">
        <button class="btn-main" onclick="submitEmail()">View Result</button>
      </div>
    `;
    return;
  }

  // If the email has already been entered, show the result
  document.getElementById('quizContent').innerHTML = `
    <h2>Your Final Result</h2>
    <div class="result-section">
      ${cardHTML}
    </div>
    <div class="share-btns">
      <button onclick="shareResult()">Share My Result</button>
    </div>
  `;
} 
function submitEmail() {
  let email = document.getElementById('emailInput').value.trim();
  if (!email || !validateEmail(email)) {
    alert("Please enter a valid email address");
    return;
  }
  quizState.userEmail = email;
  // Send the email and result to Google Sheet
  sendEmailToSheet(email, quizState.finalMajor);
  renderResult();
}


function validateEmail(email) {
  // تحقق بسيط من صحة البريد
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// هذه هي الدالة التي ترسل البيانات إلى Google Sheet
function sendEmailToSheet(email, result) {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('result', result);

  fetch("https://script.google.com/macros/s/AKfycbycnrWpwoyda9vjSMS_NUcA3wvZMjJvhdgGoOATqpGRPmHr9HD2J-qhVnvsX31BMgZR/exec", {
    method: "POST",
    body: formData
  });
}

function shareResult() {
  let major = quizState.finalMajor;
  let text = `My most suitable major is: ${major} 🌟\nTest your major at isgateway.org`;
  if (navigator.share) {
    navigator.share({ title: "University Major Quiz", text: text });
  } else {
    prompt("Copy your result and share it with your friends:", text);
  }
}

// Start the quiz
renderQuiz();

// ========== Study Calculator Functions ==========
function showStudyCalculator() {
  const calculatorSection = document.getElementById('studyCalculatorSection');
  if (calculatorSection.style.display === 'none' || calculatorSection.style.display === '') {
    calculatorSection.style.display = 'block';
    initializeStudyCalculator();
    // Scroll to the calculator section
    calculatorSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function initializeStudyCalculator() {
  const currencySymbols = {
    GBP: 'GBP',
    SAR: 'SAR',
    AED: 'AED',
    IQD: 'IQD',
    JOD: 'JOD',
    KWD: 'KWD',
    QAR: 'QAR',
    BHD: 'BHD'
  };
  
  let exchangeRates = { GBP: 1, SAR: 4.75, AED: 4.65, IQD: 1650, JOD: 0.88, KWD: 0.24, QAR: 4.63, BHD: 0.47 };
  
  async function fetchExchangeRates() {
    try {
      const res = await fetch("https://api.exchangerate.host/latest?base=GBP&symbols=GBP,SAR,AED,IQD,JOD,KWD,QAR,BHD");
      const data = await res.json();
      if(data && data.rates) {
        exchangeRates = data.rates;
        showLiveRate();
        updateCurrencyValues();
      }
    } catch (error) {
      console.log("Failed to fetch exchange rates, using default values");
    }
  }
  
  function showLiveRate() {
    const currency = currencySelect.value;
    const rate = exchangeRates[currency] || 1;
    if (currency !== 'GBP') {
      document.getElementById('liveRate').textContent = `1 GBP ≈ ${rate.toLocaleString()} ${currencySymbols[currency]}`;
    } else {
      document.getElementById('liveRate').textContent = '';
    }
  }
  
  const onlineFormURL = 'https://www.isgateway.org/study-online-in-the-uk-1';
  const onsiteFormURL = 'https://www.isgateway.org/study-in-the-uk-1-1';
  
  const currencySelect = document.getElementById('currencySelect');
  const degreeEl = document.getElementById('degree');
  const specSection = document.getElementById('specSection');
  const specialtyEl = document.getElementById('specialty');
  const phNote = document.getElementById('phNote');
  const yearsSection = document.getElementById('yearsSection');
  const firstYearsEl = document.getElementById('firstYears');
  const thirdYearEl = document.getElementById('thirdYear');
  const rankingEl = document.getElementById('ranking');
  const camNote = document.getElementById('cambridgeNote');
  const onsiteNote = document.getElementById('onsiteNote');
  const notAvailableNote = document.getElementById('notAvailableNote');
  const costDisplay = document.getElementById('costDisplay');
  const costFirstTwo = document.getElementById('costFirstTwo');
  const costThird = document.getElementById('costThird');
  const generalNotes = document.getElementById('generalNotes');
  const projNote = document.getElementById('projNote');
  const formEl = document.getElementById('registrationForm');
  const submitBtn = formEl.querySelector('button[type="submit"]');
  
  rankingEl.selectedIndex = 2;
  
  function resetAll() {
    specSection.style.display = 'none';
    specialtyEl.value = '';
    phNote.style.display = 'none';
    yearsSection.style.display = 'none';
    firstYearsEl.value = '';
    thirdYearEl.value = '';
    rankingEl.value = 'top200';
    camNote.style.display = 'none';
    onsiteNote.style.display = 'none';
    notAvailableNote.style.display = 'none';
    [...rankingEl.options].forEach(opt => opt.hidden = false);
    costDisplay.style.display = 'none';
    costFirstTwo.innerText = '—';
    costThird.innerText = '—';
    generalNotes.style.display = 'none';
    projNote.style.display = 'none';
    formEl.action = '';
    validateForm();
  }
  
  degreeEl.addEventListener('change', () => {
    resetAll();
    if (degreeEl.value === 'baccalaureate') {
      specSection.style.display = 'block';
      formEl.action = onlineFormURL;
    }
    if (degreeEl.value === 'bachelor') {
      yearsSection.style.display = 'block';
      generalNotes.style.display = 'block';
    }
    validateForm();
  });
  
  specialtyEl.addEventListener('change', () => {
    if (!specialtyEl.value) return;
    const fee = specialtyEl.value === 'publicHealth' ? 9000 : (specialtyEl.value === 'engineering' ? 6500 : 5500);
    updateCurrencyValues();
    costFirstTwo.innerText = `Total: ${convertCurrency(fee)} ${currencySymbols[currencySelect.value]}`;
    costThird.innerText = '';
    phNote.style.display = specialtyEl.value === 'publicHealth' ? 'block' : 'none';
    costDisplay.style.display = 'block';
    validateForm();
  });
  
  function updateRankingVisibility() {
    [...rankingEl.options].forEach(opt => opt.hidden = false);
  }
  
  function convertCurrency(amount) {
    const curr = currencySelect.value;
    const rate = exchangeRates[curr] || 1;
    let converted = Math.round(amount * rate * 100) / 100;
    if (curr === 'IQD') converted = Math.round(amount * rate);
    return converted.toLocaleString();
  }
  
  function calculateCost() {
    if (degreeEl.value !== 'bachelor') return;
    updateRankingVisibility();
    const fy = firstYearsEl.value, ty = thirdYearEl.value, rk = rankingEl.value;
    if (!fy || !ty || !rk) return;
    let txt1 = '', txt3 = '';
    
    const rates = {
      top20: [30000, 40000],
      top100: [17500, 23000],
      top200: [11500, 17000]
    };
    
    if (fy === 'online') {
      txt1 = `First & Second Year (Online): ${convertCurrency(7000)} ${currencySymbols[currencySelect.value]}`;
      camNote.style.display = rk === 'top20' ? 'block' : 'none';
    } else {
      const [min, max] = rates[rk];
      txt1 = `First & Second Year (Onsite): from ${convertCurrency(min*2)} to ${convertCurrency(max*2)} ${currencySymbols[currencySelect.value]}`;
      camNote.style.display = 'none';
    }
    
    if (fy === 'online' && ty === 'online' && rk === 'top20') {
      txt3 = '';
      notAvailableNote.style.display = 'block';
      costFirstTwo.innerText = txt1;
      costThird.innerText = '';
      costDisplay.style.display = 'block';
      onsiteNote.style.display = 'none';
      projNote.style.display = 'block';
      return;
    } else {
      notAvailableNote.style.display = 'none';
      if (ty === 'online') {
        if (rk === 'top100') {
          txt3 = `Third Year (Online): from ${convertCurrency(10000)} to ${convertCurrency(20000)} ${currencySymbols[currencySelect.value]}`;
        } else if (rk === 'top200') {
          txt3 = `Third Year (Online): from ${convertCurrency(6500)} to ${convertCurrency(10000)} ${currencySymbols[currencySelect.value]}`;
        } else {
          txt3 = '';
        }
      } else {
        if (fy === 'online') {
          if (rk === 'top100') {
            txt3 = `Third Year (Onsite): from ${convertCurrency(17500)} to ${convertCurrency(23000)} ${currencySymbols[currencySelect.value]}`;
          } else if (rk === 'top20') {
            txt3 = `Third Year (Onsite): from ${convertCurrency(30000)} to ${convertCurrency(40000)} ${currencySymbols[currencySelect.value]}`;
          } else {
            txt3 = `Third Year (Onsite): ${convertCurrency(10000)} ${currencySymbols[currencySelect.value]}`;
          }
        } else {
          const [min, max] = rates[rk];
          txt3 = `Third Year (Onsite): from ${convertCurrency(min)} to ${convertCurrency(max)} ${currencySymbols[currencySelect.value]}`;
        }
      }
    }
    
    if (fy === 'onsite' && ty === 'onsite') {
      const [min, max] = rates[rk];
      txt1 = `Annual Tuition by University Rank: from ${convertCurrency(min)} to ${convertCurrency(max)} ${currencySymbols[currencySelect.value]}`;
      txt3 = '';
      onsiteNote.style.display = 'block';
    } else {
      onsiteNote.style.display = 'none';
    }
    
    costFirstTwo.innerText = txt1;
    costThird.innerText = txt3;
    costDisplay.style.display = 'block';
    
    if (fy === 'online' || ty === 'online') {
      projNote.style.display = 'block';
    } else {
      projNote.style.display = 'none';
    }
    
    formEl.action = (fy==='online' || ty==='online') ? onlineFormURL : onsiteFormURL;
  }
  
  function updateCurrencyValues() {
    calculateCost();
    if (degreeEl.value === 'baccalaureate' && specialtyEl.value) {
      const fee = specialtyEl.value === 'publicHealth' ? 9000 : (specialtyEl.value === 'engineering' ? 6500 : 5500);
      costFirstTwo.innerText = `Total: ${convertCurrency(fee)} ${currencySymbols[currencySelect.value]}`;
      costDisplay.style.display = 'block';
    }
    showLiveRate();
  }
  
  currencySelect.addEventListener('change', updateCurrencyValues);
  [firstYearsEl, thirdYearEl, rankingEl, specialtyEl].forEach(el => {
    if (el) el.addEventListener('change', () => {
      calculateCost();
      updateRankingVisibility();
      validateForm();
    });
  });
  
  formEl.addEventListener('submit', e => {
    e.preventDefault();
    calculateCost();
    window.open(formEl.action, '_blank');
  });
  
  function validateForm() {
    let valid = false;
    if (degreeEl.value === 'bachelor') {
      valid = degreeEl.value && firstYearsEl.value && thirdYearEl.value && rankingEl.value;
    } else if (degreeEl.value === 'baccalaureate') {
      valid = degreeEl.value && specialtyEl.value;
    }
    submitBtn.disabled = !valid;
    submitBtn.style.opacity = valid ? "1" : "0.6";
    submitBtn.style.cursor = valid ? "pointer" : "not-allowed";
  }
  
  degreeEl.addEventListener('change', validateForm);
  [firstYearsEl, thirdYearEl, rankingEl, specialtyEl].forEach(el => {
    if (el) el.addEventListener('change', validateForm);
  });
  
  window.addEventListener('DOMContentLoaded', validateForm);
  fetchExchangeRates();
}