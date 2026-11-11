 export default function Footer() {
  return (
    <footer className="bg-stone-100 border-t border-stone-200 py-6 text-center text-sm text-stone-500 dark:bg-stone-900 dark:border-stone-800 dark:text-stone-400 transition-colors">
      <p>&copy; {new Date().getFullYear()} Cafeteria Grão Dourado. Todos os direitos reservados.</p>
    </footer>
  )
 }