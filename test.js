const puppeteer = require("puppeteer");

(async () => {

  //Acessar navegador
  const browser = await puppeteer.launch({
    executablePath: "/usr/bin/google-chrome",
    headless: false,

  });

  const page = await browser.newPage();

  //Acessar página GitHub
  await page.goto("https://github.com/login");
  await page.screenshot({ path: "img.png" });

  //Preencher dados de login
  await page.type("#login_field", "marcos.tads@hotmail.com");
  await page.type("#password", "sistema2025");
  await page.click("btn btn-primary btn-block js-sign-in-button");
  await page.waitForTimeout(500000);
  await page.waitForNavigation();

  //Validar autenticação foi bem sucedida
  await page.click("avatar circle");
  expect(text).toBe("#:ra: > div > div > div > div.fgColor-muted > div > font > font");

  //Navegação da página
  await page.click("#:r1k:--label > font > font");
  await page.click("#user-repositories-list > ul > li:nth-child(2) > div.col-10.col-lg-9.d-inline-block > div.d-inline-block.mb-1 > h3 > a");
  await page.click("#pull-requests-tab > span:nth-child(2)");
  await page.screenshot({ path: "img.png" });
  await page.click("d-block d-md-none");

  

  //Deslogar
  await page.click("avatar circle");
  await page.click("Box-sc-g0xbh4-0 cQdyWD prc-Link-Link-85e08");
  await page.click("btn btn-sm m-0");
  expect(text).toBe("Build and ship software on a single, collaborative platform");
  

  await browser.close();


  })();
