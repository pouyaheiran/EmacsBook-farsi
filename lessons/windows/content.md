# Windowها در Emacs

در این بخش با مفهوم **Window** در Emacs آشنا می‌شویم:
تقسیم صفحه به چند Window، جابه‌جایی بین آن‌ها، تغییر اندازه، بستن آنها و تفاوت Window با Frame.

## Window چیست؟

همان‌طور که در بخش قبل گفتیم، **Buffer** محتوایی است که در حال ویرایش آن هستیم و **Window** بخشی از صفحه است که آن محتوا را نمایش می‌دهد.

شما می‌توانید صفحه‌ی Emacs را به چند Window تقسیم کنید و در هر Window یک Buffer متفاوت را نمایش دهید. این کار به شما اجازه می‌دهد چند فایل یا Buffer را هم‌زمان ببینید، بدون این‌که مجبور باشید مدام بین آن‌ها با `C-x b` جابه‌جا شوید.

پس به‌طور خلاصه:

‍
هر صفحه میتواند شامل چند window باشد
هر window میتواند یک buffer متفاوت نشان دهد(همچنین بافر یکسان)


## تقسیم صفحه به دو Window

برای تقسیم Window فعلی به دو بخش، دو میانبر اصلی وجود دارد:

```text
C-x 2   تقسیم افقی
C-x 3   تقسیم عمودی
```

برای مثال اگر روی فایل `main.py` باشید و `C-x 2` را بزنید، صفحه به دو Window تقسیم می‌شود و در هر دو، محتوای `main.py` نمایش داده می‌شود. سپس می‌توانید در Window جدید با `C-x b` یک Buffer دیگر مانند `index.html` را باز کنید.

## جابه‌جایی بین Windowها

برای جابه‌جایی بین Windowهای باز، از میانبر زیر استفاده کنید:

```text
C-x o
```

با هر بار اجرای این میانبر، مکان‌نما به Window بعدی منتقل می‌شود.

اگر تعداد Windowها زیاد باشد و بخواهید مستقیماً روی یک Window خاص کلیک کنید، می‌توانید با ماوس هم روی آن Window کلیک کنید تا فعال شود.

## بستن Windowها

برای بستن Windowها دو میانبر پرکاربرد وجود دارد:

```text
C-x 0   بستن پنجره فعلی (بقیه‌ی پنجره‌ها باقی می‌مانند)
C-x 1   بستن همه‌ی پنجره ها به ‌جز پنجره‌ی فعلی
```

برای مثال اگر سه Window باز داشته باشید و در یکی از آن‌ها `C-x 1` را بزنید، فقط همان Window باقی می‌ماند و بقیه بسته می‌شوند.

نکته‌ی مهم این است که **بستن یک Window به معنی Kill کردن Buffer آن نیست.** Bufferهایی که در آن Window نمایش داده می‌شدند، همچنان باز هستند و می‌توانید با `C-x b` به آن‌ها برگردید.

```text
Close Window ≠ Kill Buffer
```

## تغییر اندازه‌ی Windowها

گاهی لازم است اندازه‌ی یک Window را نسبت به بقیه بزرگ یا کوچک کنید. برای این کار می‌توانید از میانبرهای زیر استفاده کنید:



```text
C-x ^        بزرگ‌تر کردن پنجره‌ فعلی به‌صورت عمودی
C-x }        بزرگ‌تر کردن پنجره فعلی به‌صورت افقی
C-x {        کوچک‌تر کردن پنجره فعلی به‌صورت افقی
```



همچنین اگر بخواهید همه‌ی Windowها اندازه‌ای برابر پیدا کنند، می‌توانید دستور زیر را با `M-x` اجرا کنید:

```text
M-x balance-windows
```


## Window و Frame

یک مفهوم دیگر که ممکن است با Window اشتباه گرفته شود، **Frame** است.

```text
Window = بخشی از یک Frame که یک Buffer را نمایش می‌دهد
Frame  = یک پنجره‌ی مستقل در سطح سیستم‌عامل (مثل یک پنجره‌ی برنامه)
```

یعنی یک Frame می‌تواند شامل چند Window باشد، اما یک Window همیشه متعلق به یک Frame است.

برای باز کردن یک Frame جدید:

```text
C-x 5 2
```

برای بستن Frame فعلی:

```text
C-x 5 0
```

در بیشتر کارهای روزمره نیازی به ساختن Frame جدید نیست و کار کردن با چند Window در یک Frame کافی است.

## چرا از چند Window استفاده کنیم؟

استفاده از چند Window در موقعیت‌های زیر بسیار کاربردی است:

* مقایسه‌ی محتوای دو فایل در کنار هم
* مشاهده‌ی خروجی `*Messages*` یا `*Help*` در حین کار روی فایل اصلی
* اجرای Shell یا Eshell در یک Window در حالی که فایل کد در Window دیگری باز است
* مشاهده‌ی بخش‌های مختلف یک فایل بزرگ به‌صورت هم‌زمان

## تمرین عملی

مراحل زیر را تمرین کنید:

* با `C-x 2` صفحه را به دو Window افقی تقسیم کنید.
* با `C-x 3` یک Window عمودی هم اضافه کنید.
* با `C-x o` بین Windowها جابه‌جا شوید.
* در یکی از Windowها Buffer دیگری با `C-x b` باز کنید.
* با `C-x 1` فقط Window فعلی را نگه دارید و بقیه را ببندید.
* با `M-x balance-windows` اندازه‌ی Windowها را برابر کنید.

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
            <td>تقسیم افقی Window</td>
            <td dir="ltr" style="text-align: left;"><code>C-x 2</code></td>
        </tr>
        <tr>
            <td>تقسیم عمودی Window</td>
            <td dir="ltr" style="text-align: left;"><code>C-x 3</code></td>
        </tr>
        <tr>
            <td>جابه‌جایی به Window بعدی</td>
            <td dir="ltr" style="text-align: left;"><code>C-x o</code></td>
        </tr>
        <tr>
            <td>بستن Window فعلی</td>
            <td dir="ltr" style="text-align: left;"><code>C-x 0</code></td>
        </tr>
        <tr>
            <td>بستن بقیه‌ی Windowها</td>
            <td dir="ltr" style="text-align: left;"><code>C-x 1</code></td>
        </tr>
        <tr>
            <td>بزرگ کردن عمودی Window</td>
            <td dir="ltr" style="text-align: left;"><code>C-x ^</code></td>
        </tr>
        <tr>
            <td>بزرگ کردن افقی Window</td>
            <td dir="ltr" style="text-align: left;"><code>C-x }</code></td>
        </tr>
        <tr>
            <td>کوچک کردن افقی Window</td>
            <td dir="ltr" style="text-align: left;"><code>C-x {</code></td>
        </tr>
        <tr>
            <td>برابر کردن اندازه‌ی Windowها</td>
            <td dir="ltr" style="text-align: left;"><code>M-x balance-windows</code></td>
        </tr>
        <tr>
            <td>باز کردن Frame جدید</td>
            <td dir="ltr" style="text-align: left;"><code>C-x 5 2</code></td>
        </tr>
        <tr>
            <td>بستن Frame فعلی</td>
            <td dir="ltr" style="text-align: left;"><code>C-x 5 0</code></td>
        </tr>
    </tbody>
</table>