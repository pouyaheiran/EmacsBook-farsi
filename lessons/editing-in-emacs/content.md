# شروع ویرایش در Emacs

در این بخش با چند میانبر پایه‌ی Emacs آشنا می‌شویم:
گشودن فایل، ذخیره، انتخاب متن، رونوشت، برش، چسباندن و تغییر
اندازه‌ی نمایش متن.

## میانبرها در Emacs

در مستندات Emacs از دو نماد پرکاربرد استفاده می‌شود:

<table>
    <thead>
        <tr>
            <th style="text-align: right;">نماد</th>
            <th style="text-align: right;">نام</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td dir="ltr" style="text-align: right;"><code>C</code></td>
            <td>Control</td>
        </tr>
        <tr>
            <td dir="ltr" style="text-align: right;"><code>M</code></td>
            <td>Meta (معمولاً همان کلید Alt)</td>
        </tr>
    </tbody>
</table>

## گشودن فایل

برای باز کردن یک فایل، میانبر `C-x C-f` را اجرا کنید:

ابتدا `Ctrl` + `x` و سپس `Ctrl` + `f` را فشار دهید.
Emacs مسیر فایل را در Minibuffer دریافت می‌کند. یک فایل متنی را باز کنید یا مسیر یک فایل جدید را وارد کنید.

## ذخیره

برای ذخیره‌ی تغییرات، میانبر `C-x C-s` را اجرا کنید:

ابتدا `Ctrl` + `x` و سپس `Ctrl` + `s` را بزنید.

## انتخاب متن

قبل از کپی یا برش باید بخشی از متن را انتخاب کنیم.
در Emacs متن انتخاب‌شده را **Region** می‌نامیم.

برای شروع انتخاب، میانبر `C-SPC` را بزنید:

این کار **Mark** را در محل فعلی قرار می‌دهد. حالا **Point** (مکان‌نما) را جابه‌جا کنید.
متن بین Mark و Point به عنوان Region انتخاب می‌شود.

## رونوشت (کپی)

وقتی متن موردنظر را انتخاب کردید، برای کپی کردن آن میانبر `M-w` را اجرا کنید:

یعنی کلید `Alt` را نگه دارید و `w` را بزنید.

## برش (Cut)

وقتی Region انتخاب شده است، برای برش آن میانبر `C-w` را اجرا کنید.

## چسباندن (Paste)

برای چسباندن متنی که با کپی یا برش آماده کرده‌اید، میانبر `C-y` را اجرا کنید.

در نتیجه، روند ساده‌ی کپی و چسباندن این است:

متن را انتخاب کنید، `M-w` بزنید، به محل جدید بروید و `C-y` بزنید.

## redo و undo

برای undo کردن در emacs از `/-C` و برای redo کردن از `?-C` استفاده میکنیم.

## تمرین عملی

یک فایل را با `C-x C-f` باز کنید، چند خط متن بنویسید و مراحل زیر را تمرین کنید:

- فایل را با `C-x C-s` ذخیره کنید.
- با `C-SPC` انتخاب متن را شروع کنید و با حرکت مکان‌نما یک بخش را انتخاب کنید.
- با `M-w` آن بخش را کپی کنید.
- به محل دیگری بروید و با `C-y` آن را بچسبانید.
- دوباره بخشی از متن را انتخاب کنید و با `C-w` آن را ببرید.
- با `C-y` آن را در محل دیگری بچسبانید.

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
            <td>گشودن فایل</td>
            <td dir="ltr" style="text-align: left;"><code>C-x C-f</code></td>
        </tr>
        <tr>
            <td>ذخیره فایل</td>
            <td dir="ltr" style="text-align: left;"><code>C-x C-s</code></td>
        </tr>
        <tr>
            <td>شروع انتخاب (Region)</td>
            <td dir="ltr" style="text-align: left;"><code>C-SPC</code></td>
        </tr>
        <tr>
            <td>رونوشت (کپی)</td>
            <td dir="ltr" style="text-align: left;"><code>M-w</code></td>
        </tr>
        <tr>
            <td>برش (Cut)</td>
            <td dir="ltr" style="text-align: left;"><code>C-w</code></td>
        </tr>
        <tr>
            <td>چسباندن (Paste)</td>
            <td dir="ltr" style="text-align: left;"><code>C-y</code></td>
        </tr>
        <tr>
            <td>بزرگ‌نمایی (Zoom in)</td>
            <td dir="ltr" style="text-align: left;"><code>C-x C-+</code></td>
        </tr>
        <tr>
            <td>کوچک‌نمایی (Zoom out)</td>
            <td dir="ltr" style="text-align: left;"><code>C-x C--</code></td>
        </tr>
    </tbody>
</table>