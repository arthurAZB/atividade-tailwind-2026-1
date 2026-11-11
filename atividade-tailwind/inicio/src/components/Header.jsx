const links = [
  { href: '#inicio', texto: 'Início' },
  { href: '#cardapio', texto: 'Cardápio' },
  { href: '#sobre', texto: 'Sobre' },
  { href: '#contato', texto: 'Contato' },
 ]

 export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10 dark:bg-stone-900 dark:border-b dark:border-stone-800 transition-colors">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-amber-700 dark:text-amber-500">☕ Grão Dourado</a>
        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="font-medium hover:text-amber-700 dark:hover:text-amber-400 transition-colors">{link.texto}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}