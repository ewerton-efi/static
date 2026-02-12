

// Sempre que o usuário escolher explicitamente o modo claro
//localStorage.theme = 'light'

// Sempre que o usuário escolher explicitamente o modo escuro
//localStorage.theme = 'dark'

// Sempre que o usuário escolher explicitamente respeitar a preferência do sistema operacional
//localStorage.removeItem('theme')


const darkSvg = document.getElementById('dark');
const lightSvg = document.getElementById('light');
// Ao carregar a página ou ao trocar de tema, é melhor adicionar inline no `head` para evitar FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //localStorage.setItem('theme', 'dark');
    //document.documentElement.setAttribute('data-theme', 'dark');
    console.log("modo escuro")
    

    darkSvg.style.visibility = 'hidden';
    darkSvg.style.display = 'relative';
    lightSvg.style.visibility = 'visible';
    lightSvg.style.display = 'absolute';
} else {
    //localStorage.setItem('theme', 'light');
    //document.documentElement.setAttribute('data-theme', 'light');
    console.log("modo claro")
    darkSvg.style.visibility = 'visible';
    darkSvg.style.display = 'absolute';
    lightSvg.style.visibility = 'hidden';
    lightSvg.style.display = 'relative';
}



// Obter o elemento do botão
const themeToggleButton = document.getElementById('theme-toggle');


// Função para alternar o tema
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    // Definir o novo atributo data-theme
    document.documentElement.setAttribute('data-theme', newTheme);
    // Opcional: Salvar a preferência do usuário no localStorage
    localStorage.setItem('theme', newTheme);
    console.log("Tema alterado para:", newTheme);
    if (newTheme === 'dark') {
        darkSvg.style.visibility = 'hidden';
        lightSvg.style.visibility = 'visible';
    } else {
        
        darkSvg.style.visibility = 'visible';
        lightSvg.style.visibility = 'hidden';
    }
    //document.getElementById(newTheme).style.visibility = 'none';
}

// Adicionar um ouvinte de evento ao botão
themeToggleButton.addEventListener('click', toggleTheme);

// Opcional: Aplicar o tema salvo ao carregar a página para evitar a exibição do tema incorreto
(function() {

const savedTheme = localStorage.getItem('theme') || 'dark'; // O padrão é 'light' se nenhuma preferência for salva
document.documentElement.setAttribute('data-theme', savedTheme);
})();
