// تحميل التغييرات المحفوظة عند فتح الصفحة الرئيسية
document.addEventListener('DOMContentLoaded', () => {
    const savedHeroTitle = localStorage.getItem('heroTitle');
    const savedAboutText = localStorage.getItem('aboutText');

    if (savedHeroTitle && document.getElementById('hero-title')) {
        document.getElementById('hero-title').textContent = savedHeroTitle;
    }
    if (savedAboutText && document.getElementById('about-text')) {
        document.getElementById('about-text').textContent = savedAboutText;
    }
});

// إدارة تسجيل دخول الأدمن
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const user = document.getElementById('admin-user').value;
        const pass = document.getElementById('admin-pass').value;

        // اسم المستخدم والكلمة الافتراضية
        if (user === 'admin' && pass === '123456') {
            document.getElementById('login-box').classList.add('hidden');
            document.getElementById('dashboard').classList.remove('hidden');
        } else {
            alert('بيانات الدخول غير صحيحة!');
        }
    });
}

// حفظ التغييرات من لوحة التحكم
function saveChanges() {
    const newTitle = document.getElementById('edit-hero-title').value;
    const newAbout = document.getElementById('edit-about-text').value;

    if (newTitle) localStorage.setItem('heroTitle', newTitle);
    if (newAbout) localStorage.setItem('aboutText', newAbout);

    alert('تم حفظ التغييرات بنجاح! اذهب للصفحة الرئيسية لرؤية التحديث.');
}

function logoutAdmin() {
    location.reload();
}