const quizData = [
  {
    question:
      "1. من با یک پروژه جدید راحت‌تر کنار می‌آیم وقتی که .............................................",
    a: {
      text: "ایده‌ها را بگیرم و یک دید خوب نسبت به پروژه پیدا کنم ",
      points: 2.5,
    },
    b: {
      text: "تمام اطلاعات و داده‌های پیرامون کار را جمع‌آوری کنم.",
      points: 2.5,
    },
    c: {
      text: "برای اجرای موفقیت‌آمیز یک پروژه برنامه‌ریزی کنم.  ",
      points: 2.5,
    },
    d: { text: "با افرادی که در پروژه با من درگیرند آشنا شوم. ", points: 2.5 },
    correct: "a",
  },

  {
    question:
      "بیشترین اضطراب را زمانی که ........................................ در کار کردن با دیگران دارم",
    a: {
      text: "نتوانم تفاوت‌های وضعیت فعلی با گذشته را بپذیرم و به جلو حرکت کنم",
      points: 2.5,
    },
    b: {
      text: "از من خواسته شود بدون مرور اطلاعات و داده‌ها تصمیم بگیرم",
      points: 2.5,
    },
    c: {
      text: "از من خواسته شود بدون اطلاعات کافی تصمیماتی بگیرم",
      points: 2.5,
    },
    d: { text: "نتوانم احساس واقعیم را بیان کنم.  ", points: 2.5 },
    correct: "b",
  },
  {
    question: ". من معتقدم اثربخشی تیم زمانی زیاد می‌شود که ................",
    a: {
      text: "افراد راه‌های جدید را برای انجام کارها امتحان کنند.",
      points: 2.5,
    },
    b: {
      text: "اعضا ارزش‌های قوی‌ای دارند که به آنها جهت می‌دهد. ",
      points: 2.5,
    },
    c: { text: " افراد به نقش خودشان متعهد هستند.", points: 2.5 },
    d: { text: "ارتباطات شخصی با دیگران برقرار شده باشد. ", points: 2.5 },
    correct: "d",
  },
  {
    question: "بزرگترین نقاط قوت من ........................................",
    a: {
      text: "توانایی پذیرش چالش‌های جدید و رسیدنبه راه‌حل‌های خلاقانه است.",
      points: 2.5,
    },
    b: {
      text: "در یک موقعیت با داده‌های درست و تحلیل مناسب کاملاً هدفمند باشم.",
      points: 2.5,
    },
    c: {
      text: "توانایی جذب جزئیات برای تدوین یک برنامه عملیاتی دارم. ",
      points: 2.5,
    },
    d: {
      text: "وقتی احساسات دیگران را درک می‌کنم ، واکنش نشان می‌دهم.",
      points: 2.5,
    },
    correct: "b",
  },
  {
    question:
      "من در یک تیم بهتر کار می‌کنم اگر ......................................................",
    a: { text: "فعالانه با دیگران در تبادل ایده‌ها مشارکت کنم.", points: 2.5 },
    b: { text: "در یک محیط ساختاری با دستورالعمل شفاف کار کنم. ", points: 2.5 },
    c: { text: "در راستای یک خروجی عملیاتی و دقیق کار کنم. ", points: 2.5 },
    d: { text: "ارتباطی در سطح خصوصی با دیگران برقرار کنم.", points: 2.5 },
    correct: "b",
  },
  {
    question:
      "من بیشترین یادگیری را وقتی دارم که .................................",
    a: {
      text: "آزادی عمل برای جستجو و کاوش خلاقانه را داشته و به قواعد ثابت محدود نشوم.",
      points: 2.5,
    },
    b: {
      text: "ساختارهایی را مطالعه و ایجاد کنم که در راستای چشم‌انداز بلندمدت باشد. ",
      points: 2.5,
    },
    c: {
      text: "حداکثر اطلاعات ممکن را جمع‌اوری   تا فعالیت‌های خوب برنامه‌ریزی       شده تعریف کنم.",
      points: 2.5,
    },
    d: { text: "به افراد برای حل مشکلاتشان کمک کنیم", points: 2.5 },
    correct: "b",
  },
  {
    question: "وقتی کاری اشتباه می‌شود ",
    a: {
      text: "به شرایط محیط و افراد پیرامون آن می‌نگرم.                 ",
      points: 2.5,
    },
    b: {
      text: "به دنبال کاستی و نقص در فعالیت‌ها و برنامه‌ریزی می‌گردم. ",
      points: 2.5,
    },
    c: {
      text: "به موقعیت و اهمیت هر یک از قسمت‌های آن نگاه می‌کنم. ",
      points: 2.5,
    },
    d: {
      text: "به دنبال امکان اینکه چگونه فعالیت‌های من به آن ربط داشته است می‌گردم. ",
      points: 2.5,
    },
    correct: "b",
  },
  {
    question:
      "من موقعیت‌هایی را دوست دارم که ......................................... می‌پذیرد.",
    a: {
      text: "توسعه ایده‌های جدید برای بوجود آوردن چیزی بهتر را.",
      points: 2.5,
    },
    b: { text: "یک محیط ساختاریافته و قابل اتکا را", points: 2.5 },
    c: {
      text: "یک روند سیستماتیک برای انجام گرفتن کارها موجود ‌باشد.",
      points: 4,
    },
    d: { text: "فرصت‌های بیان خلاقیت", points: 2.5 },
    correct: "b",
  },
  {
    question: "در صورتی متوجه می‌شوم که کارم را خوب انجام داده‌ام اگر ",
    a: {
      text: "افراد را برای اتمام مؤثر و سریع کاری مبهم دور هم جمع کنم.",
      points: 2.5,
    },
    b: {
      text: "برای یک پروژه بلند مدت شفافیت بیشتری بدست بیاورم.",
      points: 2.5,
    },
    c: {
      text: "متوجه بشوم که در یک برنامه بزرگتر ، هدفی کاربردی را در نظر گرفته‌ام.",
      points: 2.5,
    },
    d: { text: "دیگران احساس خوبی داشته باشند.", points: 2.5 },
    correct: "b",
  },
  {
    question:
      "وقتی افراد اطراف من احساس بدی داشته باشند ، دوست دارم که ...........................",
    a: { text: "به آنها کمک کنم تا به آن احساس غالب شوند.", points: 2.5 },
    b: {
      text: "سرم به کار خودم باشه و آنها را به حال خودشان بگذارم. ",
      points: 2.5,
    },
    c: {
      text: "به آنها کمک کنم تا روی مسئولیت خودشان تمرکز کنند. ",
      points: 2.5,
    },
    d: { text: "با آنها همدردی کنم و احساسم مانند آنها باشد. ", points: 2.5 },
    correct: "b",
  },
  {
    question:
      "در شرایطی بهتر یاد می‌گیرم که ........................................... ",
    a: { text: "فعالانه تجربه و آزمایش کنم ", points: 2.5 },
    b: {
      text: "از یک آرایه (پرزنتیشن) واضح و ساختاریافته یاد بگیرم",
      points: 2.5,
    },
    c: {
      text: "هدف از یادگیری و دلایل آن را به طور کامل بدانم ",
      points: 2.5,
    },
    d: { text: "یادگیری به صورت تعاملی باشد", points: 2.5 },
    correct: "b",
  },
  {
    question: "بهترین توصیف از من در یک کلمه :",
    a: { text: "خودجوش", points: 2.5 },
    b: { text: "تحلیل گرا", points: 2.5 },
    c: { text: "اصول گرا/منظم", points: 2.5 },
    d: { text: "احساس گرا ", points: 2.5 },
    correct: "b",
  },
  {
    question:
      "زمانی که یک فعالیت یا پروژه جدید را شروع می‌کنم اولین کاری که می‌کنم این ‌است‌که :",
    a: {
      text: "یک تصویر کلی از آن را در نظر می‌گیرم و در طول کار آن را ارزیابی می‌کنم.",
      points: 2.5,
    },
    b: {
      text: "برای یافتن بهترین روش انجام آن ، قسمت‌های مختلف آن فعالیت یا پروژه را تحلیل می‌کنم. ",
      points: 2.5,
    },
    c: {
      text: "تا جایی که امکان دارد بیشترین اطلاعات را در مورد آن پروژه جمع می‌کنم.  ",
      points: 2.5,
    },
    d: {
      text: "افرادمشارکت‌کننده را بررسی کنم و ببینم چگونه می‌توانم هم‌افزایی ایجاد کنم.    ",
      points: 2.5,
    },
    correct: "b",
  },
  {
    question:
      "موردی که بهترین توصیف برای مراحل فعالیت‌های من در شروع یک پروژه می‌باشد :",
    a: {
      text: "اطلاعات اندکی بدست می‌آورم و به سرعت روی آن اقدام می‌کنم ، نتیجه را نگاه می‌کنم و انطباق می‌دهم.",
      points: 2.5,
    },
    b: {
      text: "اطلاعات می‌گیرم ، دقیق تحلیل می‌کنم و اقدام مناسب را صورت می‌دهم.",
      points: 2.5,
    },
    c: {
      text: "برای درک کامل اطلاعات                   کافی جمع می‌کنم ، آن را مرور می‌کنم ، برنامه‌ای برای اجرای کارها تنظیم می‌کند",
      points: 2.5,
    },
    d: {
      text: "آن را با تجارب شخصی خود ارتباط می‌دهم ، قبل از ادامه کار به احساساتی که در نتیجه این بوجود آمده ، توجه میکنم ",
      points: 2.5,
    },
    correct: "b",
  },
  {
    question: "مهمترین عامل برای اثربخش کردن ارتباطات این است که ",
    a: {
      text: "وقتی عقاید خود را بیان کنی ، دیگران به تو بازخورد بدهند. ",
      points: 2.5,
    },
    b: { text: "یک نفر موضوع را کامل و مفصل توضیح دهد.", points: 2.5 },
    c: {
      text: "یک نفر موضوع را جزء به جزء بررسی و تیتروار ارائه دهد.",
      points: 2.5,
    },
    d: {
      text: "سایرین چنان رفتار کنند که بنظر می‌رسد چیزی که درباره‌اش صحبت می‌کنم ، واقعاً اهمیت دارد. ",
      points: 2.5,
    },
    correct: "b",
  },
  {
    question:
      "بیشترین چیزی که من را می‌آزارد ................................................",
    a: {
      text: "فردی است که نگران این است که بقیه چه احساسی دارند.",
      points: 2.5,
    },
    b: {
      text: "فردی که زمان زیادی را روی جزئیات ناچیز می‌گذارد و نمی‌تواند تصمیمی بگیرد. ",
      points: 2.5,
    },
    c: { text: "فردی که در محاورات نظر خود را بیان نمی‌کند.", points: 2.5 },
    d: { text: "فردی که بدون بررسی ، دست به اقدام می‌زند.  ", points: 2.5 },
    correct: "b",
  },
  {
    question:
      "من نمی‌توانم در محیطی که .................................... خوب کار کنم",
    a: { text: "خیلی اجتماعی است 	", points: 2.5 },
    b: { text: "ساختار غیرانعطافی داشته باشد", points: 2.5 },
    c: {
      text: "ساختار بسیار نظام‌مند و خشک و بی روح داشته باشد.",
      points: 2.5,
    },
    d: { text: "ساختارش بی‌ثبات باشد ", points: 2.5 },
    correct: "b",
  },
  {
    question:
      "برای من متمرکز شدن روی یک پروژه‌ای زمانی که ......................................... مشکل است.",
    a: { text: "دیگران همه جا همواره در مورد آن صحبت می‌کنند", points: 2.5 },
    b: {
      text: "دستورالعمل‌ها هیچ فرصتی برای خلاقیت نگذاشته باشد  ",
      points: 2.5,
    },
    c: { text: "مداوم تصمیمات اخذ شده را تحلیل می‌کنند", points: 2.5 },
    d: {
      text: "دیگران به احساسات خود به صورت مداوم واکنش نشان می‌دهند  ",
      points: 2.5,
    },
    correct: "b",
  },
  {
    question:
      "زمانی که به یک پروژه خیلی علاقه‌مند هستم ، اگر بقیه‌ی افراد .................... مأیوس می‌شوم",
    a: { text: "بیش از حد در مورد آن احساساتی شوند", points: 2.5 },
    b: { text: "احساساتشان را در مورد پروژه بیان نمی‌کنند", points: 2.5 },
    c: {
      text: "آن را خیلی جدی گرفته و لذت را در آن از بین می‌برند ",
      points: 2.5,
    },
    d: {
      text: "به جای انجام وظیفه اصلیشان ، در تمامی قسمت‌های کار دخالت می‌کنند ",
      points: 2.5,
    },
    correct: "b",
  },
  {
    question:
      "زمانی که به یک پروژه خیلی علاقمند هستم، اگر بقیه افراد .................مایوس می شوم.",
    a: { text: "بیش از حد در مورد آن احساساتی شوند.", points: 2.5 },
    b: { text: "احساساتشان را در مورد پروژه بیان نمی کنند.", points: 2.5 },
    c: {
      text: "آن را خیلی جدی گرفته و لذت را در آن از بین میبرند.",
      points: 2.5,
    },
    d: {
      text: "بجای انجام وظیفه اصلی شان،در تمامی قسمت های کار دخالت می کنند.",
      points: 2.5,
    },
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const submitBtn = document.getElementById("submit");
const result = document.getElementById("result");

let currentQuiz = 0;
let score = 0;

// تابع بارگذاری سوالات
function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  quiz.innerHTML = `
              <div class="question">${currentQuizData.question}</div>
              <ul class="answers">
                  <li data-answer="a">
                      <input type="radio" id="a" name="answer" value="a">
                      <label for="a">${currentQuizData.a.text}</label>
                  </li>
                  <li data-answer="b">
                      <input type="radio" id="b" name="answer" value="b">
                      <label for="b">${currentQuizData.b.text}</label>
                  </li>
                  <li data-answer="c">
                      <input type="radio" id="c" name="answer" value="c">
                      <label for="c">${currentQuizData.c.text}</label>
                  </li>
                  <li data-answer="d">
                      <input type="radio" id="d" name="answer" value="d">
                      <label for="d">${currentQuizData.d.text}</label>
                  </li>
              </ul>
          `;

  // اضافه کردن رویداد کلیک برای هر li
  const answerElements = document.querySelectorAll(".answers li");
  answerElements.forEach((elem) => {
    elem.addEventListener("click", () => {
      deselectAnswers(); // غیرفعال کردن انتخاب‌های قبلی
      const radioInput = elem.querySelector("input");
      radioInput.checked = true; // انتخاب کردن گزینه
    });
  });
}

// تابع غیر فعال کردن انتخاب‌های قبلی
function deselectAnswers() {
  const answersEls = document.querySelectorAll("input[name='answer']");
  answersEls.forEach((answerEl) => {
    answerEl.checked = false; // تیک پاسخ‌ها را برداشتن
  });
}

// تابع دریافت پاسخ انتخاب شده
function getSelected() {
  const answersEls = document.querySelectorAll("input[name='answer']");
  let answer;
  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.value; // اگر گزینه انتخاب شده باشد، مقدار آن را ذخیره کن
    }
  });
  return answer;
}

//تعریف امتیازات
let score1 = 0;
let score2 = 0;
let score3 = 0;
let score4 = 0;

// رویداد کلیک بر روی دکمه ارسال
submitBtn.addEventListener("click", () => {
  const answer = getSelected(); // دریافت پاسخ انتخاب شده

  console.log(answer);
  if (answer) {
    // اگر جوابی انتخاب شده است
    const selectedOption = quizData[currentQuiz][answer];
    if (answer == "a") {
      // اضافه کردن امتیاز مربوط به انتخاب
      score1 += selectedOption.points;
    } else if (answer == "b") {
      // اضافه کردن امتیاز مربوط به انتخاب
      score2 += selectedOption.points;
    } else if (answer == "c") {
      // اضافه کردن امتیاز مربوط به انتخاب
      score3 += selectedOption.points;
    } else if (answer == "d") {
      // اضافه کردن امتیاز مربوط به انتخاب
      score4 += selectedOption.points;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz(); // بارگذاری سوال بعدی
    } else {
      // score1 /= 2;
      // score2 /= 2;
      // score3 /= 2;
      // score4 /= 2;

      arr = [score1, score2, score3, score4];
      maximum = 0;
      aximum_num = 5;
      colors = ["سبز", "قرمز", "بنفش", "آبی"];
      color = ["green", "red", "purple", "blue"];

      for (var i = 0; i <= arr.length; i++) {
        if (maximum < arr[i]) {
          maximum = arr[i];
          maximum_num = i;
        }
      }

      // نمایش نتیجه
      result.innerHTML = `
          <div style="width: 300px; margin: auto" class="res">
      <canvas id="myChart"></canvas>
    </div>
      <p style="margin:0 !important">شما ${maximum} از ${
        quizData.length * 5
      } امتیاز کسب کردید!
      </p>
      <p>

        رنگ مغز شما
        <span style="color:${color[maximum_num]}">${colors[maximum_num]}</span>
       
       است 
        </p>

        
        <p> مغز شما ${arr[0]}
        درصد 
        <span style="color:${color[0]}"> سبز </span>
        است
        </p>
        <p> مغز شما ${arr[1]}
        درصد 
        <span style="color:${color[1]}"> قرمز </span>
        است
        </p>
        <p> مغز شما ${arr[2]}
        درصد 
        <span style="color:${color[2]}"> بنفش </span>
        است
        </p>
        <p> مغز شما ${arr[3]}
        درصد 
        <span style="color:${color[3]}">ابی </span>
        است
        </p>
      `;
      const ctx = document.getElementById("myChart");

      const data = {
        labels: ["Green", "Red", "Purple", "Blue"],
        datasets: [
          {
            label: "My First Dataset",
            data: [arr[0], arr[1], arr[2], arr[3]],
            backgroundColor: ["#5bcb5b", "#ff6565", "#bf63cf", "#038ef4"],
            hoverOffset: 4,
          },
        ],
      };

      new Chart(ctx, {
        type: "pie",
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      quiz.style.display = "none"; // مخفی کردن بخش سوالات
      submitBtn.style.display = "none"; // مخفی کردن دکمه ارسال
    }
  }
});

// بارگذاری سوالات برای بار اول
loadQuiz();
