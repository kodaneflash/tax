import { If } from './if';
import { LoadingOverlay } from './loading-overlay';
import { TopLoadingBarIndicator } from './top-loading-bar-indicator';

export function GlobalLoader({
  displayLogo = false,
  fullPage = false,
  displaySpinner = true,
  displayTopLoadingBar = true,
}: React.PropsWithChildren<{
  displayLogo?: boolean;
  fullPage?: boolean;
  displaySpinner?: boolean;
  displayTopLoadingBar?: boolean;
}>) {
  return (
    <>
      <If condition={displayTopLoadingBar}>
        <TopLoadingBarIndicator />
      </If>

      <If condition={displaySpinner}>
        <div
          className={
            'flex flex-1 flex-col items-center justify-center animate-in fade-in zoom-in-50 slide-in-from-bottom-8'
          }
        >
          <LoadingOverlay displayLogo={displayLogo} fullPage={fullPage} />
        </div>
      </If>
    </>
  );
}
