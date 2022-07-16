export function checkDarkMode(): void {
  const userTheme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (userTheme === 'dark' || (!userTheme && systemTheme)) {
    document.documentElement.classList.add('dark');
    document.body.classList.add('body-dark');
  } else {
    document.documentElement.classList.remove('dark');
    document.body.classList.remove('body-dark');
  }
}

export default function handleDarkMode(): void {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    document.body.classList.remove('body-dark');
    localStorage.setItem('theme', 'light');
    return;
  }
  document.documentElement.classList.add('dark');
  document.body.classList.add('body-dark');
  localStorage.setItem('theme', 'dark');
}
