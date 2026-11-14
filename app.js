const translations = {
  fa: {
    navFeatures:'ویژگی‌ها',navPlatforms:'نسخه‌ها',navAbout:'درباره',navGet:'دریافت DLM',badge:'منتشرشده برای مک · نسخه ۰.۱.۰',
    heroTitle:'دانلودها،<br><em>تحت کنترل تو.</em>',heroDesc:'همه دانلودها را یک‌جا ببین و مدیریت کن؛ از توقف و ادامه انتقال‌ها تا دسته‌بندی فایل‌ها، تعیین اولویت و زمان‌بندی دانلود، در محیطی یکپارچه و مخصوص مک.',heroButton:'دانلود برای مک',discover:'آشنایی با امکانات ↓',heroNote:'دانلود و استفاده رایگان؛ بدون نیاز به اشتراک.',
    mockNew:'دانلود جدید',mockAll:'همه دانلودها',mockDownloading:'در حال دانلود',mockSchedule:'زمان‌بندی‌شده',mockCompleted:'تکمیل‌شده',mockTotal:'سرعت کل',mockTitle:'دانلودهای شما',mockSub:'همه‌چیز در یک مکان',mockLive:'● فعال',mockScheduled:'زمان‌بندی‌شده',mockTomorrow:'فردا ساعت ۰۲:۰۰',mockDisclaimer:'نمای مفهومی رابط کاربری · تصویر واقعی برنامه نیست',
    screenshotCaption:'نمای واقعی برنامه DLM 0.1.0',downloadTag:'دانلود رسمی برای مک',downloadTitle:'DLM را برای مک دریافت کن.',downloadLead:'دانلود و استفاده رایگان است. نسخه مخصوص Apple Silicon یا Intel را انتخاب کن؛ نیازمند macOS 13 یا جدیدتر.',releaseLabel:'آخرین نسخه:',armTitle:'پردازنده اپل',armSub:'مک با تراشه سری M',intelTitle:'مک اینتل',intelSub:'مک با پردازنده Intel',downloadAction:'دانلود DMG ↗',downloadAction2:'دانلود DMG ↗',releaseNotes:'توضیحات نسخه و فایل‌های بررسی صحت ↗',sourceLink:'مخزن کد منبع ↗',installTitle:'نکته مهم نصب',installBody:'این نسخه با امضای ad-hoc ارائه شده و تأیید رسمی Apple Notarization ندارد؛ بنابراین ممکن است macOS اجرای اولیه را مسدود کند. پس از بررسی و اطمینان از فایل، در صورت امکان از System Settings ← Privacy & Security ← Open Anyway استفاده کن. امنیت Gatekeeper را به‌صورت سراسری غیرفعال نکن. دانلودها زمانی انجام می‌شوند که DLM باز باشد.',appleGuide:'راهنمای رسمی اپل برای بازکردن برنامه ↗',
    trustOne:'اولویت‌بندی و صف دانلود',trustTwo:'زمان‌بندی دانلودها',trustThree:'توقف و ادامه دانلود',trustFour:'برنامه بومی macOS',featuresTag:'مدیریت منظم‌تر دانلودهای روزمره',featuresTitle:'همه‌چیز سر جای خود.<br><em>بدون پیچیدگی اضافه.</em>',
    feature1Title:'اولویت با دانلودهای مهم‌تر',feature1Desc:'دانلودها را در صف مدیریت کن و برای هرکدام اولویت تعیین کن تا رسیدگی به فایل‌های مهم ساده‌تر شود.',feature2Title:'دانلود مطابق برنامه تو',feature2Desc:'برای دانلودها زمان مشخص کن و فعالیت انتقال فایل‌ها را از یک محیط شفاف و منظم مدیریت کن.',feature3Title:'پیشرفت، همیشه جلوی چشم',feature3Desc:'وضعیت و پیشرفت دانلودها را یک‌جا ببین. انتقال را متوقف کن و در صورت پشتیبانی سرور، از همان نقطه ادامه بده.',
    platformTag:'وضعیت انتشار',platformTitle:'ساخته‌شده برای مک.<br><em>آماده دانلود.</em>',platformDesc:'رابط بومی SwiftUI/AppKit با موتور دانلود Rust؛ قابل استفاده روی macOS 13 به بالا، در مک‌های Apple Silicon و Intel.',macNote:'پردازنده‌های اپل و اینتل · macOS 13+',winNote:'نسخه دسکتاپ در برنامه توسعه',linuxNote:'نسخه دسکتاپ در برنامه توسعه',statusDevelopment:'منتشرشده',statusPlanned:'برنامه‌ریزی‌شده',statusPlanned2:'برنامه‌ریزی‌شده',
    aboutTag:'توجه به جزئیاتی که مهم‌اند',aboutTitle:'مدیریت روشن‌تر،<br><em>برای دانلودهای مهم‌تر.</em>',aboutDesc:'از دسته‌بندی و جست‌وجو تا اولویت‌بندی صف، زمان‌بندی و اتصال اختیاری مرورگر، DLM ابزارهای کاربردی مدیریت دانلود را در یک تجربه متمرکز برای مک کنار هم می‌آورد.',aboutNote:'نسخه رسمی مک رایگان است؛ کد منبع با شرایط مالکیتی قابل مشاهده است.',footer:'ساخته‌شده با دقت · © ۲۰۲۶ DLM',backTop:'بازگشت به بالا ↑'
  }
};
const english = {};
for (const el of document.querySelectorAll('[data-i18n]')) english[el.dataset.i18n] = el.textContent;
for (const el of document.querySelectorAll('[data-i18n-html]')) english[el.dataset.i18nHtml] = el.innerHTML;
function setLanguage(lang){
  const fa = lang==='fa';document.documentElement.lang=lang;document.documentElement.dir=fa?'rtl':'ltr';document.body.classList.toggle('fa',fa);
  for(const el of document.querySelectorAll('[data-i18n]')){const key=el.dataset.i18n;el.textContent=fa?translations.fa[key]:english[key];}
  for(const el of document.querySelectorAll('[data-i18n-html]')){const key=el.dataset.i18nHtml;el.innerHTML=fa?translations.fa[key]:english[key];}
  document.querySelector('#lang-switch .lang-label').textContent=fa?'EN':'FA';
  document.getElementById('lang-switch').title=fa?'Switch to English':'نمایش سایت به فارسی';
  document.title=fa?'DLM — دانلودها، تحت کنترل تو.':'DLM — Downloads, under control.';
  try{localStorage.setItem('dlm-site-language',lang);}catch{}
}
let stored;try{stored=localStorage.getItem('dlm-site-language');}catch{}
setLanguage(stored==='fa'?'fa':'en');
document.getElementById('lang-switch').addEventListener('click',()=>setLanguage(document.documentElement.lang==='en'?'fa':'en'));

// Resolve the latest public release dynamically; never require a website deployment for new versions.
// If the GitHub API is unavailable or rate-limited, send users to the official latest-release page.
(async function updateRelease(){
  const repo='https://github.com/mr3amuel/DLM';
  const latest=repo+'/releases/latest';
  for(const id of ['download-arm64','download-intel','release-page']) document.getElementById(id).href=latest;
  try{
    const controller=new AbortController();
    const timer=setTimeout(()=>controller.abort(),7000);
    let response;
    try { response=await fetch('https://api.github.com/repos/mr3amuel/DLM/releases/latest',{headers:{'Accept':'application/vnd.github+json'},signal:controller.signal}); }
    finally { clearTimeout(timer); }
    if(!response.ok) return;
    const release=await response.json();
    if(!release || !Array.isArray(release.assets) || !/^v?\d+\.\d+\.\d+/.test(release.tag_name||'')) return;
    document.getElementById('release-version').textContent=release.tag_name;
    if(release.html_url && release.html_url.startsWith(repo+'/releases/')) document.getElementById('release-page').href=release.html_url;
    const names={ 'download-arm64':/^DLM-.*-macOS-arm64\.dmg$/, 'download-intel':/^DLM-.*-macOS-x86_64\.dmg$/ };
    for(const [id,pattern] of Object.entries(names)){
      const asset=release.assets.find(a=>pattern.test(a.name));
      if(asset && asset.browser_download_url && asset.browser_download_url.startsWith(repo+'/releases/download/')) document.getElementById(id).href=asset.browser_download_url;
    }
  }catch(error){ /* Offline / rate limited: official latest-release fallback remains usable. */ }
})();

// Browser OS can usually be identified; Mac CPU architecture cannot reliably be identified
// from ordinary browser APIs (including on Apple Silicon with compatibility modes).
// Never silently select a potentially incompatible installer.
(function platformGuidance(){
  const hint=document.getElementById('platform-hint');
  const ua=navigator.userAgent||'';
  const isMac=/Macintosh|Mac OS X/.test(ua);
  const links=[document.getElementById('download-arm64'),document.getElementById('download-intel')];
  function render(){
    const fa=document.documentElement.lang==='fa';
    if(isMac){
      hint.hidden=false;
      hint.textContent=fa?'✓ macOS شناسایی شد. مرورگر نمی‌تواند نوع تراشه را با اطمینان تشخیص دهد؛ Apple Silicon (سری M) یا Intel را انتخاب کن.':'✓ macOS detected. Browsers cannot reliably identify your Mac chip. Choose Apple Silicon (M-series) or Intel.';
    }else{
      hint.hidden=false;
      hint.textContent=fa?'نسخه فعلی فقط برای macOS است. برای دانلود، نوع تراشه مک خود را انتخاب کن.':'DLM is currently available for macOS only. Choose the installer for your Mac’s chip.';
    }
  }
  const observer=new MutationObserver(render);observer.observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  render();
  links.forEach(link=>link.setAttribute('aria-label',link.textContent.trim()));
})();
