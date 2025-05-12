import React from 'react';
interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
    name: string;
    size?: number;
    className?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({ name, size = 24, className = '', ...props }) => {
    // Dynamically import SVG from assets/icons folder
    const Icon = React.lazy(() => import(`../../assets/svg/${name}.svg`));

    return (
        <React.Suspense fallback={<span className="inline-block w-6 h-6" />}>
            <Icon width={size} height={size} className={className} {...props} />
        </React.Suspense>
    );
};

export default SvgIcon;
