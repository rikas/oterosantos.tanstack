import { Moon, Sun } from 'lucide-react';
import { ClientOnly } from '@tanstack/react-router';
import { linkVariants } from '../atoms';
import { useTheme } from './ThemeProvider';

export default function DarkmodeToggle(): React.ReactElement {
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === 'dark';

  const description = `Activate ${isDarkMode ? 'light' : 'dark'} mode`;

  const changeTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <ClientOnly>
      <button
        type="button"
        className={linkVariants({
          variant: 'nav',
          className: 'cursor-pointer',
        })}
        aria-label={description}
        title={description}
        onClick={changeTheme}
      >
        {isDarkMode ? (
          <Sun strokeWidth={1.6} className="size-6" />
        ) : (
          <Moon strokeWidth={1.6} className="size-6" />
        )}
      </button>
    </ClientOnly>
  );
}
