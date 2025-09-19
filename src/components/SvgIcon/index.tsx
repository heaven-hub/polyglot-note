import { Suspense,lazy } from 'react';
interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
    name: string;
    width: number|string;
    height?:number|string;
    className?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({ name, width = 24, height , className = '', ...props }) => {
    // Dynamically import SVG from assets/icons folder
    const Icon = lazy(() => import(`@/assets/svg/${name}.svg`));

    return (
        <Suspense fallback={<span className="inline-block w-6 h-6" />}>
            <Icon width={width} height={height || width} className={className} {...props} />
        </Suspense>
    );
};

export default SvgIcon;
