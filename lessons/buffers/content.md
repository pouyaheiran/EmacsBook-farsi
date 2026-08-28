# Bufferها در Emacs

در این بخش با مفهوم **Buffer** در Emacs آشنا می‌شویم:
ایجاد و جابه‌جایی بین Bufferها، تفاوت Buffer و فایل، Bufferهای داخلی
و بستن Buffer.

## Buffer چیست؟

در Emacs چیزی که در حال ویرایش آن هستیم معمولاً یک **Buffer** است.

وقتی یک فایل را با `C-x C-f` باز می‌کنید، Emacs محتوای آن فایل را در یک Buffer قرار می‌دهد.
تغییراتی که انجام می‌دهید ابتدا روی Buffer اعمال می‌شوند و با ذخیره کردن، این تغییرات روی فایل نوشته می‌شوند.

بنابراین Buffer و فایل یکی نیستند.


یک Buffer می‌تواند مربوط به یک فایل باشد، اما هر Buffer الزاماً فایل نیست.

## Bufferهای بدون فایل

Emacs برای بسیاری از قابلیت‌های خود Buffer ایجاد می‌کند که مربوط به فایل خاصی نیستند.

برای مثال:

```text
*scratch*
*Messages*
*Help*
```

این Bufferها معمولاً برای کارهای داخلی Emacs استفاده می‌شوند.

همچنین اگر Shell یا Eshell را اجرا کنید، آن‌ها نیز در یک Buffer نمایش داده می‌شوند.

برای اجرای Shell:

```text
M-x shell
```

و برای اجرای Eshell:

```text
M-x eshell
```

بنابراین می‌توانیم Buffer را فقط به عنوان «فایل بازشده» در نظر نگیریم؛
Buffer محیطی است که Emacs محتوا را در آن نمایش می‌دهد و امکان کار کردن با آن را فراهم می‌کند.

## جابه‌جایی بین Bufferها

برای جابه‌جایی بین Bufferها، میانبر `C-x b` را اجرا کنید:

Emacs نام Buffer موردنظر را در Minibuffer دریافت می‌کند.
نام Buffer را وارد کنید و `RET` بزنید.

برای مثال اگر دو Buffer به نام‌های `main.py` و `index.html` داشته باشید:

```text
C-x b
```

سپس:

```text
index.html
```

را وارد کنید تا به Buffer مربوط به `index.html` بروید.

### جابه‌جایی سریع

اگر مرتب بین دو Buffer جابه‌جا می‌شوید، می‌توانید از:

```text
C-x b RET
```

استفاده کنید.

این کار معمولاً شما را به Buffer قبلی برمی‌گرداند.

با اجرای دوباره‌ی آن، دوباره به Buffer قبلی بازمی‌گردید.

علاوه بر این شما میتوانید برای جابجایی سریع بین بافر ها از میانبر های زیر استفاده کنید:
```text
C-x left برای رفتن به بافر قبلی
C-x right برای رفتن به بافر بعدی
```

## مشاهده‌ی Bufferها

برای مشاهده‌ی فهرست Bufferهای باز، میانبر `C-x C-b` را اجرا کنید.

Emacs فهرستی از Bufferهای موجود را نمایش می‌دهد.

برای مثال ممکن است Bufferهایی مانند این داشته باشید:

```text
main.py
index.html
style.css
*scratch*
*Messages*
```

در این فهرست هم Bufferهای مربوط به فایل‌ها و هم Bufferهای داخلی Emacs نمایش داده می‌شوند.

## Buffer و فایل چه تفاوتی دارند؟

فرض کنید فایل `main.py` را باز کرده‌اید.

فایل روی دیسک قرار دارد، اما Emacs محتوای آن را داخل Buffer قرار می‌دهد.
وقتی در حال تایپ کردن هستید، تغییرات روی Buffer انجام می‌شوند.

تا زمانی که فایل را ذخیره نکرده باشید، نسخه‌ی روی دیسک تغییر نمی‌کند.

برای ذخیره‌ی Buffer، از:

```text
C-x C-s
```

استفاده کنید.


به همین دلیل اگر Buffer را تغییر دهید و سپس آن را ببندید، Emacs در صورت وجود تغییرات ذخیره‌نشده به شما هشدار می‌دهد.

## Kill کردن Buffer

برای بستن یک Buffer از میانبر `C-x k` استفاده کنید.

بعد از اجرای این میانبر، Emacs نام Buffer موردنظر را در Minibuffer دریافت می‌کند.

برای مثال:

```text
C-x k
```

سپس نام Buffer را وارد کنید:

```text
main.py
```

و `RET` بزنید.

Buffer بسته می‌شود.

نکته‌ی مهم این است که **Kill کردن Buffer به معنی حذف فایل نیست.**

اگر Buffer مربوط به `main.py` را Kill کنید، فایل `main.py` روی دیسک باقی می‌ماند و می‌توانید دوباره آن را با `C-x C-f` باز کنید.

بنابراین:

```text
Kill Buffer ≠ Delete File
```

## Bufferهای تغییرکرده

اگر محتوای یک Buffer را تغییر دهید اما هنوز آن را ذخیره نکرده باشید، Buffer دارای تغییرات ذخیره‌نشده است.

برای ذخیره‌ی این تغییرات:

```text
C-x C-s
```

را اجرا کنید.

اگر بخواهید Buffer دارای تغییرات ذخیره‌نشده را Kill کنید، Emacs برای جلوگیری از از دست رفتن تغییرات به شما هشدار می‌دهد.

این ویژگی باعث می‌شود تغییرات را به‌صورت تصادفی از دست ندهید.

## Buffer و Window

**Buffer** و **Window** دو مفهوم متفاوت هستند.

Buffer محتوایی است که Emacs در اختیار شما قرار می‌دهد، در حالی که Window بخشی از صفحه است که Buffer را نمایش می‌دهد.

برای مثال ممکن است چند Buffer باز داشته باشید:

```text
main.py
style.css
script.js
*Messages*
```

اما فقط یکی از آن‌ها در Window فعلی نمایش داده شود.

پس به‌طور ساده:

```text
Buffer = محتوا
Window = محل نمایش محتوا
```

در فصل مربوط به Windowها بیشتر با این مفهوم آشنا می‌شویم.

## Bufferهای مهم Emacs

چند Buffer داخلی Emacs را بهتر است از همین ابتدا بشناسید:

<table>
    <thead>
        <tr>
            <th style="text-align: right;">Buffer</th>
            <th style="text-align: right;">کاربرد</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td dir="ltr" style="text-align: right;"><code>*scratch*</code></td>
            <td>Buffer پیش‌فرض برای کارهای موقت</td>
        </tr>
        <tr>
            <td dir="ltr" style="text-align: right;"><code>*Messages*</code></td>
            <td>نمایش پیام‌های Emacs</td>
        </tr>
        <tr>
            <td dir="ltr" style="text-align: right;"><code>*Help*</code></td>
            <td>نمایش مستندات و راهنمای Emacs</td>
        </tr>
    </tbody>
</table>

برای دسترسی به این Bufferها می‌توانید از `C-x b` استفاده کنید.

## تمرین عملی

چند فایل را با `C-x C-f` باز کنید و مراحل زیر را تمرین کنید:

* با `C-x b` بین Bufferها جابه‌جا شوید.
* با `C-x b RET` بین دو Buffer قبلی رفت‌وبرگشت کنید.
* با `C-x C-b` فهرست Bufferها را مشاهده کنید.
* یکی از فایل‌ها را تغییر دهید و با `C-x C-s` ذخیره کنید.
* یکی از Bufferها را با `C-x k` Kill کنید.

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
            <td>ذخیره‌ی Buffer</td>
            <td dir="ltr" style="text-align: left;"><code>C-x C-s</code></td>
        </tr>
        <tr>
            <td>جابه‌جایی بین Bufferها</td>
            <td dir="ltr" style="text-align: left;"><code>C-x b</code></td>
        </tr>
        <tr>
            <td>جابه‌جایی سریع به Buffer قبلی</td>
            <td dir="ltr" style="text-align: left;"><code>C-x b RET</code></td>
        </tr>
        <tr>
            <td>نمایش Buffer List</td>
            <td dir="ltr" style="text-align: left;"><code>C-x C-b</code></td>
        </tr>
        <tr>
            <td>Kill کردن Buffer</td>
            <td dir="ltr" style="text-align: left;"><code>C-x k</code></td>
        </tr>
        <tr>
            <td>اجرای Shell</td>
            <td dir="ltr" style="text-align: left;"><code>M-x shell</code></td>
        </tr>
        <tr>
            <td>اجرای Eshell</td>
            <td dir="ltr" style="text-align: left;"><code>M-x eshell</code></td>
        </tr>
    </tbody>
</table>
