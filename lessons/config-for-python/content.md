# آماده‌سازی Emacs برای پایتون

در این بخش یاد می‌گیریم چطور Emacs را برای توسعه‌ی پایتون آماده کنیم؛ از نصب ابزارهای پایه گرفته تا راه‌اندازی LSP، تکمیل خودکار، نمایش خطاها، فرمت‌بندی و مدیریت محیط‌های مجازی.

## چه چیزهایی لازم داریم؟

برای داشتن یک محیط توسعه‌ی مناسب برای پایتون در Emacs، معمولاً به چند ابزار و لایه نیاز داریم:

* **Major Mode** مخصوص پایتون برای syntax highlighting و indentation
* **LSP (Language Server Protocol)** برای تکمیل هوشمند، رفتن به تعریف، نمایش خطاها و امکانات مشابه
* **Completion UI** برای نمایش پیشنهادهای تکمیل
* **Linter/Formatter** برای بررسی و مرتب‌سازی کد
* **Virtualenv Manager** برای مدیریت محیط‌های مجازی پروژه‌ها

پیش‌نیاز این فصل، آشنایی با نصب پکیج‌ها از فصل «نصب پکیج» است.

## نصب پکیج پایه‌ی پایتون

Emacs از سال‌ها قبل یک `python-mode` داخلی دارد که برای ویرایش فایل‌های پایتون کافی است و نیازی به نصب پکیج جداگانه برای آن نداریم.

در نسخه‌های جدید Emacs، `python-ts-mode` نیز در دسترس است و از Tree-sitter برای تحلیل ساختار کد استفاده می‌کند.

وقتی یک فایل با پسوند `.py` باز می‌کنید، Emacs معمولاً یکی از این Major Modeها را به‌صورت خودکار فعال می‌کند.

بنابراین در این بخش نیازی به نصب Major Mode جداگانه نداریم.

> **نکته:** برای این setup از نصب پکیج خارجی `python-mode` خودداری کنید. این پکیج با Major Mode داخلی Emacs متفاوت است و می‌تواند completionهای مخصوص Python را در bufferهای غیرپایتونی نیز وارد کند.

## LSP چیست و چرا لازم است؟

**LSP (Language Server Protocol)** یک پروتکل استاندارد است که ویرایشگرها را به یک **Language Server** متصل می‌کند.

در Emacs دو کلاینت معروف برای LSP وجود دارد:

<table>
    <thead>
        <tr>
            <th style="text-align: right;">کلاینت</th>
            <th style="text-align: right;">ویژگی</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td dir="ltr" style="text-align: right;"><code>lsp-mode</code></td>
            <td>قدیمی‌تر، امکانات زیاد و جامعه‌ی کاربری بزرگ</td>
        </tr>
        <tr>
            <td dir="ltr" style="text-align: right;"><code>eglot</code></td>
            <td>سبک‌تر و ساده‌تر؛ از Emacs 29 به بعد به‌صورت داخلی موجود است</td>
        </tr>
    </tbody>
</table>

در این فصل روی `eglot` تمرکز می‌کنیم، چون ساده‌تر است و در Emacs 29 و نسخه‌های جدیدتر نیازی به نصب جداگانه ندارد.

> **نکته:** `eglot` خودش Language Server نیست. وظیفه‌ی آن برقراری ارتباط بین Emacs و Language Server است.

## نصب یک Language Server برای پایتون

برای استفاده از `eglot` باید یک Language Server مناسب پایتون روی سیستم نصب کنید.

چند گزینه‌ی رایج عبارت‌اند از:

<table>
    <thead>
        <tr>
            <th style="text-align: right;">Language Server</th>
            <th style="text-align: right;">توضیح</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td dir="ltr" style="text-align: right;"><code>pyright</code></td>
            <td>ساخته‌ی Microsoft، سریع و مناسب برای تحلیل و Type Checking</td>
        </tr>
        <tr>
            <td dir="ltr" style="text-align: right;"><code>python-lsp-server (pylsp)</code></td>
            <td>متن‌باز و افزونه‌پذیر، با پشتیبانی از چند ابزار مختلف</td>
        </tr>
    </tbody>
</table>

در این فصل از `pyright` استفاده می‌کنیم.

### نصب با npm

اگر npm روی سیستم شما نصب است:

```bash
npm install -g pyright
```

اگر npm رو نصب نداری:

Debian/Ubuntu

```bash
sudo apt install nodejs npm
```

Arch

```bash
sudo pacman -S nodejs npm
```

Windows/macOS

<a href="https://nodejs.org/en/download/">دانلود از سایت رسمی</a>

بعد از نصب، مطمئن شوید دستور Language Server در `PATH` سیستم قرار دارد؛ در غیر این صورت `eglot` نمی‌تواند آن را پیدا کند.

## فعال‌سازی eglot برای پایتون

بعد از نصب Language Server، می‌توانیم `eglot` را برای فایل‌های پایتون فعال کنیم.

در `init.el` این خطوط را اضافه کنید:

```elisp
(add-hook 'python-mode-hook #'eglot-ensure)
(add-hook 'python-ts-mode-hook #'eglot-ensure)
```

استفاده از هر دو hook باعث می‌شود تنظیمات شما هم برای `python-mode` و هم برای `python-ts-mode` کار کند.

`eglot-ensure` بررسی می‌کند که آیا برای buffer فعلی یک Language Server مناسب وجود دارد یا نه و در صورت امکان، اتصال را برقرار می‌کند.

با این تنظیم، هر بار که یک فایل `.py` باز کنید، `eglot` به‌صورت خودکار تلاش می‌کند به Language Server متصل شود.

برای اتصال دستی نیز می‌توانید از دستور زیر استفاده کنید:

```text
M-x eglot
```

برای بررسی وضعیت اتصال نیز می‌توانید از:

```text
M-x eglot-events-buffer
```

استفاده کنید. این buffer اطلاعات مربوط به ارتباط `eglot` با Language Server را نمایش می‌دهد و در زمان عیب‌یابی می‌تواند مفید باشد.

## تکمیل خودکار با Corfu

`eglot` پیشنهادهای تکمیل را از Language Server دریافت می‌کند، اما برای نمایش آن‌ها می‌توانیم از یک Completion UI مانند **Corfu** استفاده کنیم.

Corfu سبک و مینیمال است و با سیستم تکمیل داخلی Emacs و `eglot` به‌خوبی کار می‌کند.

برخلاف `eglot`، Corfu به‌صورت Built-in در Emacs نیست و باید آن را نصب کنیم.

### نصب Corfu

ابتدا از داخل Emacs این دستور را اجرا کنید:

```text
M-x package-install RET corfu RET
```

پس از نصب، می‌توانیم آن را در `init.el` فعال کنیم.

اگر `use-package` را قبلاً نصب و فعال کرده‌اید، می‌توانید از این تنظیم استفاده کنید:

```elisp
(use-package corfu
  :ensure t
  :init
  (global-corfu-mode)
  :custom
  (corfu-auto t)
  (corfu-auto-delay 0.2)
  (corfu-auto-prefix 1)
  (corfu-cycle t))
```

گزینه‌ی `:ensure t` باعث می‌شود `use-package` در صورت موجود نبودن پکیج، تلاش کند آن را نصب کند.

بنابراین این روش **جایگزین** نصب دستی است؛ اگر از `use-package` و `:ensure t` استفاده نمی‌کنید، ابتدا باید Corfu را با `package-install` نصب کنید.

### نمایش خودکار پیشنهادها

به‌صورت پیش‌فرض می‌توانید پیشنهادهای Corfu را با کلیدهای تکمیل درخواست کنید. با فعال کردن:

```elisp
(corfu-auto t)
```

منوی تکمیل می‌تواند به‌صورت خودکار هنگام تایپ ظاهر شود.

در مثال بالا:

* `corfu-auto-delay` مدت انتظار قبل از نمایش منو را مشخص می‌کند.
* `corfu-auto-prefix` حداقل تعداد کاراکترهای لازم برای شروع تکمیل را مشخص می‌کند.
* `corfu-cycle` اجازه می‌دهد بعد از رسیدن به انتهای فهرست، دوباره از ابتدای آن حرکت کنید.

## نمایش خطاها با Flymake

`eglot` علاوه بر تکمیل و navigation، اطلاعات مربوط به خطاها و هشدارهای Language Server را نیز دریافت می‌کند.

Emacs برای نمایش این diagnostics یک ابزار داخلی به نام **Flymake** دارد.

وقتی `eglot` فعال باشد، معمولاً Flymake نیز برای دریافت و نمایش diagnostics استفاده می‌شود و نیازی به نصب پکیج جداگانه ندارید.

برای دیدن خطاهای موجود در buffer می‌توانید:

```text
M-x flymake-show-buffer-diagnostics
```


### Flycheck چیست؟

**Flycheck** یک جایگزین برای Flymake است که امکانات و پشتیبانی گسترده‌تری از ابزارهای مختلف دارد.

اگر تازه با `eglot` شروع کرده‌اید، استفاده از Flymake ساده‌تر است و نصب Flycheck ضروری نیست.

## فرمت‌بندی کد با Black

تا اینجا LSP به ما در تحلیل کد کمک می‌کند، اما برای مرتب و یکدست نگه داشتن ظاهر کد می‌توانیم از یک Formatter استفاده کنیم.

یکی از Formatterهای معروف پایتون **Black** است.

ابتدا خود Black را روی سیستم نصب کنید:

```bash
pip install black
```

سپس برای اتصال آن به Emacs می‌توانیم از پکیج `blacken` استفاده کنیم.

### نصب blacken

از داخل Emacs اجرا کنید:

```text
M-x package-install RET blacken RET
```

یا اگر از `use-package` استفاده می‌کنید:

```elisp
(use-package blacken
  :ensure t
  :hook (python-mode . blacken-mode))
```

در این حالت `blacken-mode` برای فایل‌های پایتون فعال می‌شود.

> **نکته:** نصب `blacken` به‌تنهایی کافی نیست. خود برنامه‌ی `black` نیز باید روی سیستم نصب باشد، چون `blacken` در واقع Emacs را به Black متصل می‌کند.

برای اجرای Black روی buffer فعلی نیز می‌توانید از:

```text
M-x blacken-buffer
```

استفاده کنید.

## مدیریت محیط‌های مجازی (Virtualenv)

وقتی روی چند پروژه‌ی پایتون کار می‌کنید، بهتر است وابستگی‌های هر پروژه را در یک محیط مجازی جداگانه نگه دارید.

برای مثال ممکن است یک پروژه به نسخه‌ی خاصی از یک کتابخانه نیاز داشته باشد، در حالی که پروژه‌ی دیگری به نسخه‌ی متفاوتی از همان کتابخانه نیاز دارد.

پکیج `pyvenv` امکان فعال و غیرفعال کردن محیط‌های مجازی را از داخل Emacs فراهم می‌کند.

### نصب pyvenv

ابتدا آن را از داخل Emacs نصب کنید:

```text
M-x package-install RET pyvenv RET
```

یا با `use-package`:

```elisp
(use-package pyvenv
  :ensure t)
```

### فعال کردن یک محیط مجازی

برای فعال کردن محیط مجازی:

```text
M-x pyvenv-activate
```

سپس مسیر پوشه‌ی `venv` را انتخاب کنید.

برای مثال اگر ساختار پروژه به شکل زیر باشد:

```text
my-project/
├── .venv/
├── main.py
└── requirements.txt
```

می‌توانید پوشه‌ی `.venv` را به‌عنوان محیط مجازی انتخاب کنید.

برای غیرفعال کردن آن نیز می‌توانید از:

```text
M-x pyvenv-deactivate
```

استفاده کنید.

> **نکته مهم:** اگر `eglot` قبل از فعال کردن محیط مجازی اجرا شده باشد، ممکن است Language Server همچنان محیط قبلی را در نظر بگیرد. بعد از فعال کردن `.venv` بهتر است `eglot` را restart کنید:
>
> ```text
> M-x eglot-shutdown
> ```
>
> و سپس:
>
> ```text
> M-x eglot
> ```
>
> به این ترتیب `pyright` با محیط Python فعال‌شده مجدداً راه‌اندازی می‌شود.

## یک پیکربندی نمونه

اگر همه‌ی اجزای بالا را نصب کرده‌اید، می‌توانید تنظیمات اصلی را در `init.el` به شکل زیر قرار دهید:

```elisp
;; Enable eglot for Python
(add-hook 'python-mode-hook #'eglot-ensure)
(add-hook 'python-ts-mode-hook #'eglot-ensure)

;; Completion UI
(use-package corfu
  :ensure t
  :init
  (global-corfu-mode)
  :custom
  (corfu-auto t)
  (corfu-auto-delay 0.2)
  (corfu-auto-prefix 1)
  (corfu-cycle t))

;; Python formatter
(use-package blacken
  :ensure t
  :hook (python-mode . blacken-mode))

;; Virtual environments
(use-package pyvenv
  :ensure t)
```

اگر `use-package` در تنظیمات شما وجود ندارد، ابتدا باید آن را نصب کنید یا پکیج‌ها را به‌صورت دستی با

`M-x package-install` نصب کنید.

همچنین توجه کنید که این تنظیمات فقط سمت Emacs را آماده می‌کنند؛ ابزارهای خارجی مانند `pyright` و `black` باید جداگانه روی سیستم نصب باشند.

## چرا این پیکربندی مهم است؟

با ترکیب این ابزارها، Emacs می‌تواند بسیاری از امکاناتی را که معمولاً از یک IDE انتظار داریم در اختیارمان قرار دهد:

* `eglot` ارتباط با Language Server را مدیریت می‌کند.
* Language Server کد را تحلیل می‌کند و اطلاعاتی مانند تعریف‌ها، ارجاع‌ها و خطاها را فراهم می‌کند.
* `corfu` پیشنهادهای تکمیل را به شکل یک منوی مناسب نمایش می‌دهد.
* `flymake` خطاها و هشدارها را نمایش می‌دهد.
* `black` کد را با یک سبک یکدست فرمت می‌کند.
* `pyvenv` مدیریت محیط‌های مجازی را از داخل Emacs ساده‌تر می‌کند.

## جمع‌بندی دستورات این بخش

<table>
    <thead>
        <tr>
            <th style="text-align: right;">عملکرد</th>
            <th style="text-align: left;">دستور</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>اتصال دستی به Language Server</td>
            <td dir="ltr" style="text-align: left;"><code>M-x eglot</code></td>
        </tr>
        <tr>
            <td>راه‌اندازی مجدد Eglot</td>
            <td dir="ltr" style="text-align: left;"><code>M-x eglot-shutdown</code></td>
        </tr>
        <tr>
            <td>نمایش رویدادهای Eglot</td>
            <td dir="ltr" style="text-align: left;"><code>M-x eglot-events-buffer</code></td>
        </tr>
        <tr>
            <td>نمایش خطاهای Buffer</td>
            <td dir="ltr" style="text-align: left;"><code>M-x flymake-show-buffer-diagnostics</code></td>
        </tr>
        <tr>
            <td>فرمت کردن Buffer با Black</td>
            <td dir="ltr" style="text-align: left;"><code>M-x blacken-buffer</code></td>
        </tr>
        <tr>
            <td>فعال‌سازی محیط مجازی</td>
            <td dir="ltr" style="text-align: left;"><code>M-x pyvenv-activate</code></td>
        </tr>
        <tr>
            <td>غیرفعال کردن محیط مجازی</td>
            <td dir="ltr" style="text-align: left;"><code>M-x pyvenv-deactivate</code></td>
        </tr>
    </tbody>
</table>
