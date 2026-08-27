# فایل‌ها در Emacs

در این بخش با نحوه‌ی کار با **فایل‌ها** در Emacs آشنا می‌شویم: باز کردن، ذخیره کردن، ایجاد فایل جدید، تغییر نام، حذف و مفاهیم مرتبط با مسیر و ارتباط آن با Buffer.

## یادآوری: رابطه‌ی فایل و Buffer

وقتی یک فایل را در Emacs باز می‌کنید، محتوای آن در یک **Buffer** بارگذاری می‌شود. تا زمانی که تغییرات را ذخیره نکرده باشید، تغییرات فقط در همان Buffer وجود دارند و روی فایل واقعی روی دیسک اعمال نشده‌اند.

```text
File   = چیزی که روی دیسک ذخیره شده
Buffer = نسخه‌ای از محتوای فایل که در حافظه و در حال ویرایش است
```


به همین دلیل ممکن است یک Buffer باز باشد بدون این‌که به هیچ فایلی متصل باشد (مثلاً `*scratch*` یا `*Messages*`)، یا این‌که تغییراتی در Buffer داشته باشید که هنوز روی فایل ذخیره نشده‌اند.

## باز کردن فایل

برای باز کردن یک فایل از میانبر زیر استفاده می‌کنید:

```text
C-x C-f
```

با زدن این میانبر، Emacs در پایین صفحه (Minibuffer) از شما مسیر فایل را می‌پرسد و می‌توانید:

* مسیر کامل فایل را تایپ کنید
* یا با `Tab` از قابلیت تکمیل خودکار (Completion) استفاده کنید
* اگر فایلی با آن نام وجود نداشته باشد، Emacs یک Buffer جدید و خالی برای همان نام می‌سازد که با ذخیره کردن، فایل واقعی ساخته می‌شود

## ذخیره کردن فایل

برای ذخیره کردن تغییرات Buffer فعلی روی فایل:

```text
C-x C-s
```

اگر بخواهید Buffer فعلی را با نام یا مسیر دیگری ذخیره کنید (شبیه Save As):

```text
C-x C-w
```

با این کار یک فایل جدید ساخته می‌شود و Buffer فعلی به آن فایل جدید متصل می‌شود؛ فایل قبلی دست‌نخورده باقی می‌ماند.

اگر چند Buffer تغییر یافته دارید و بخواهید همه را یک‌جا ذخیره کنید:

```text
C-x s
```

Emacs برای هر Buffer تغییر یافته می‌پرسد که آیا ذخیره شود یا نه.

## نشانگرهای وضعیت فایل در Mode Line

در نوار پایین هر Window (Mode Line) دو نویسه‌ی کوچک قبل از نام Buffer نشان می‌دهند که فایل در چه وضعیتی است:

<table>
    <thead>
        <tr>
            <th style="text-align: right;">نشانه</th>
            <th style="text-align: right;">معنی</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td dir="ltr" style="text-align: right;"><code>--</code></td>
            <td>فایل ذخیره شده و تغییری نکرده است</td>
        </tr>
        <tr>
            <td dir="ltr" style="text-align: right;"><code>**</code></td>
            <td>فایل تغییر کرده و هنوز ذخیره نشده است</td>
        </tr>
        <tr>
            <td dir="ltr" style="text-align: right;"><code>%%</code></td>
            <td>فایل فقط خواندنی (Read-only) است</td>
        </tr>
    </tbody>
</table>


## ایجاد فایل جدید

برای ساختن فایل جدید نیازی به دستور جداگانه‌ای نیست؛ کافی است با `C-x C-f` مسیر و نامی را وارد کنید که هنوز وجود ندارد. Emacs یک Buffer خالی برای آن می‌سازد و با اولین `C-x C-s` فایل روی دیسک ایجاد می‌شود.

## بازگرداندن فایل به آخرین نسخه‌ی ذخیره‌شده

اگر تغییراتی در Buffer داده‌اید و می‌خواهید آن‌ها را نادیده بگیرید و به آخرین نسخه‌ی ذخیره‌شده روی دیسک برگردید:

```text
M-x revert-buffer
```

Emacs قبل از انجام این کار برای تأیید از شما سؤال می‌کند، چون تغییرات ذخیره‌نشده از بین می‌روند.

## مدیریت فایل‌ها با Dired

Emacs یک ابزار داخلی به نام **Dired** دارد که به شما اجازه می‌دهد فایل‌ها و پوشه‌ها را مثل یک File Manager مدیریت کنید. برای باز کردن Dired روی یک مسیر مشخص:

```text
C-x d
```

سپس مسیر پوشه‌ی مورد نظر را وارد می‌کنید. در محیط Dired می‌توانید فایل‌ها را مشاهده، باز، حذف، کپی یا تغییر نام دهید.

برخی از میانبرهای پرکاربرد داخل Dired:

<table>
    <thead>
        <tr>
            <th style="text-align: right;">عملکرد</th>
            <th style="text-align: left;">کلید میانبر</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>باز کردن فایل/پوشه‌ی زیر مکان‌نما</td>
            <td dir="ltr" style="text-align: left;"><code>Enter</code></td>
        </tr>
        <tr>
            <td>علامت‌گذاری فایل برای حذف</td>
            <td dir="ltr" style="text-align: left;"><code>d</code></td>
        </tr>
        <tr>
            <td>اجرای عملیات‌های علامت‌گذاری‌شده (مثل حذف واقعی)</td>
            <td dir="ltr" style="text-align: left;"><code>x</code></td>
        </tr>
        <tr>
            <td>تغییر نام فایل</td>
            <td dir="ltr" style="text-align: left;"><code>R</code></td>
        </tr>
        <tr>
            <td>کپی کردن فایل</td>
            <td dir="ltr" style="text-align: left;"><code>C</code></td>
        </tr>
        <tr>
            <td>ساخت پوشه‌ی جدید</td>
            <td dir="ltr" style="text-align: left;"><code>+</code></td>
        </tr>
        <tr>
            <td>تازه‌سازی لیست فایل‌ها</td>
            <td dir="ltr" style="text-align: left;"><code>g</code></td>
        </tr>
    </tbody>
</table>

## تغییر نام و حذف فایل بدون Dired

اگر نخواهید وارد Dired شوید، می‌توانید مستقیماً از دستورات زیر با `M-x` استفاده کنید:

```text
M-x rename-file
M-x delete-file
M-x copy-file
```

هرکدام از این دستورات به‌ترتیب مسیر فایل مبدأ و در صورت نیاز مسیر مقصد را از شما می‌پرسند.

## فایل‌های اخیر (Recent Files)

Emacs می‌تواند لیستی از فایل‌هایی که اخیراً باز کرده‌اید نگه دارد. برای فعال‌سازی این قابلیت:

```text
M-x recentf-mode
```

پس از فعال شدن، برای دیدن و باز کردن یکی از فایل‌های اخیر:

```text
C-x C-r
```

## بستن Buffer یک فایل

بستن Buffer به‌معنی حذف فایل نیست؛ فقط Buffer مربوط به آن فایل از حافظه پاک می‌شود (اگر تغییر ذخیره‌نشده‌ای وجود داشته باشد، Emacs برای تأیید می‌پرسد):

```text
C-x k
```

## چرا شناخت این دستورات مهم است؟

کار روان با فایل‌ها در Emacs باعث می‌شود بدون نیاز به خروج از محیط ویرایشگر و رفتن سراغ File Manager سیستم‌عامل، تمام کارهای زیر را انجام دهید:

* باز و بسته کردن سریع فایل‌ها بدون استفاده از ماوس
* مدیریت چند فایل و پوشه هم‌زمان با Dired
* بازیابی سریع فایل‌هایی که اخیراً روی آن‌ها کار کرده‌اید
* جلوگیری از گم شدن تغییرات با توجه به نشانگرهای Mode Line

## تمرین عملی

مراحل زیر را تمرین کنید:

* با `C-x C-f` یک فایل جدید به نام `notes.txt` بسازید و کمی متن در آن بنویسید.
* با `C-x C-s` آن را ذخیره کنید.
* با `C-x C-w` همان محتوا را با نام `notes-copy.txt` ذخیره کنید.
* با `C-x d` وارد Dired شوید و فایل‌های ساخته‌شده را ببینید.
* در Dired یکی از فایل‌ها را با `R` تغییر نام دهید.
* با `M-x recentf-mode` و سپس `C-x C-r` لیست فایل‌های اخیر را بررسی کنید.

## جمع‌بندی میانبرهای این بخش

<table>
    <thead>
        <tr>
            <th style="text-align: right;">عملکرد</th>
            <th style="text-align: left;">کلید میانبر</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>باز کردن فایل</td>
            <td dir="ltr" style="text-align: left;"><code>C-x C-f</code></td>
        </tr>
        <tr>
            <td>ذخیره‌ی فایل</td>
            <td dir="ltr" style="text-align: left;"><code>C-x C-s</code></td>
        </tr>
        <tr>
            <td>ذخیره با نام دیگر (Save As)</td>
            <td dir="ltr" style="text-align: left;"><code>C-x C-w</code></td>
        </tr>
        <tr>
            <td>ذخیره‌ی همه‌ی Bufferهای تغییر یافته</td>
            <td dir="ltr" style="text-align: left;"><code>C-x s</code></td>
        </tr>
        <tr>
            <td>بازگرداندن به آخرین نسخه‌ی ذخیره‌شده</td>
            <td dir="ltr" style="text-align: left;"><code>M-x revert-buffer</code></td>
        </tr>
        <tr>
            <td>باز کردن Dired روی یک مسیر</td>
            <td dir="ltr" style="text-align: left;"><code>C-x d</code></td>
        </tr>
        <tr>
            <td>تغییر نام فایل (خارج از Dired)</td>
            <td dir="ltr" style="text-align: left;"><code>M-x rename-file</code></td>
        </tr>
        <tr>
            <td>حذف فایل (خارج از Dired)</td>
            <td dir="ltr" style="text-align: left;"><code>M-x delete-file</code></td>
        </tr>
        <tr>
            <td>فعال‌سازی حالت فایل‌های اخیر</td>
            <td dir="ltr" style="text-align: left;"><code>M-x recentf-mode</code></td>
        </tr>
        <tr>
            <td>باز کردن لیست فایل‌های اخیر</td>
            <td dir="ltr" style="text-align: left;"><code>C-x C-r</code></td>
        </tr>
        <tr>
            <td>بستن Buffer فعلی</td>
            <td dir="ltr" style="text-align: left;"><code>C-x k</code></td>
        </tr>
    </tbody>
</table>

