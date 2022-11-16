const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');
const GetUrl = 'https://www.whatsapp.com/contact/?lang=usar&subject=messenger';

console.log('____________________  __________________________ ');
console.log('__  ___/___  __/__  |/ /___  __/___  ____/___  / ');
console.log('_____ \ __  /   __    / __  /   __  __/   __  /  ');
console.log('____/ / _  /    _    |  _  /    _  /___   _  /___');
console.log('/____/  /_/     /_/|_|  /_/     /_____/   /_____/');
console.log('                                                 ');
console.log('[🎉] DESBANIR NUMERO');
console.log(' ');
console.log('[1] METODO 1');
console.log('[2] METODO 2');
console.log('[99] METODO CUSTOM');
console.log('__________________________');
console.log('______MODOS DE SCRIPT_____')
console.log('                          ');
console.log('[1] QUANTIDADES PARA REPETI');
console.log('[2] LOOP');


const email = readlineSync.question('EMAIL:') || 'bolsominiho124@gmail.com';
const telefone = readlineSync.question('NUMERO: +55') || '99999999'
var voltar = readlineSync.question('REPETIR:') || '1';
var vezes = 0;
var opcao = readlineSync.question('TIPO DE METODO:') || '0';
const msg1 = 'hello i made a small mistake within the whatsapp platform i used a modified whatsapp gb application as i am new to the platform i thought i could use it and soon after i got banned i ask you to please remove my ban';
const msg2 = 'My number was banned improperly this was a mistake. I was cloned and my number was stolen I need to activate my account I have an appliance company and I have pending orders.';
const msgcustom = readlineSync.question('MSG:');
var modo = readlineSync.question('MODE:') || '1';

//const senha = readlineSync.question('SENHA:') || '07832486';

//const CNPJ = readlineSync.question('CPJ:') || '47.357.962/0001-66';

//while(voltar > vezes){
(async () =>{

    //const msgcustom = readlineSync.question('MSG:');
    if(modo == 1){

    while(voltar > vezes){
    //const browser = await puppeteer.launch({headless: false,});
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(GetUrl);

    await page.type('[type="tel"]', `${telefone}`);
    console.log('DIGITADO TELEFONE..');
    await page.type('[type="email"]', `${email}`);
    console.log('DIGITADO EMAIL...');
    await page.type('#email_confirm', `${email}`);
    console.log('CONFIRMADO EMAIL...');
    if(opcao == 1)
    {
        await page.type('#your_message', `${msg1}`);
    }
    if(opcao == 2)
    {
        await page.type('#your_message', `${msg2}`);
    }
    if(opcao == 0)
    {
        await page.type('#your_message', `${msg1}`);
    }
    if(opcao == 99)
    {
        //const msgcustom = readlineSync.question('MSG:');
        await page.type('#your_message', `${msgcustom}`);
    }
    

    await page.click('#submit');

    await page.click('._9s87._9vcv._advm');

    setTimeout(function(){
        page.click('._9s87._9vcv._advm');

    }, 3000);
    vezes++;
    console.log(`[${vezes}] SPAM ENVIADO!`);

    }
}

if(modo == 2)
{
    while(true)
    {
        setTimeout(function()
        {
            console.log('CARREGANDO SPAM..');
        }, 2000);
        //const browser = await puppeteer.launch({headless: false,});
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(GetUrl);
    
        await page.type('[type="tel"]', `${telefone}`);
        console.log('DIGITADO TELEFONE..');
        await page.type('[type="email"]', `${email}`);
        console.log('DIGITADO EMAIL...');
        await page.type('#email_confirm', `${email}`);
        console.log('CONFIRMADO EMAIL...');
        await page.click('[value="ANDROID"]');
        if(opcao == 1)
        {
            await page.type('#your_message', `${msg1}`);
        }
        if(opcao == 2)
        {
            await page.type('#your_message', `${msg2}`);
        }
        if(opcao == 0)
        {
            await page.type('#your_message', `${msg1}`);
        }
        if(opcao == 99)
        {
            //const msgcustom = readlineSync.question('MSG:');
            await page.type('#your_message', `${msgcustom}`);

            if(msgcustom == "")
            {
                console.log('O número de telefone parece estar incorreto. Verifique se você inseriu o número correto.');
            }
        
        }
        
    
        await page.click('#submit');
    
        await page.click('._9s87._9vcv._advm');
    
        setTimeout(function(){
            page.click('._9s87._9vcv._advm');
    
        }, 3000);
        vezes++;
        //await page.keyboard.press('Control') + page.keyboard.press('F4');
        console.log(`[${vezes}] SPAM ENVIADO!`);
        setTimeout(function(){
            console.log('ENTRADO EM LOOP...');
        }, 8000);
    }
    
}

    console.log('TODO SPAM FOI ENVIADO COM SUCESSO!');





    //await page.type('.form-control.cnpj_search', `${CNPJ}`);

    //const STATUS = await page.evaluate(() =>{
   //     return document.querySelector('.cnpj_status').innerHTML;
   // });


})();
//vezes++;
//}
console.log('ENVIADO SPAM...');

