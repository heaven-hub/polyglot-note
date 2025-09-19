import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NotFound() {
    const { t } = useTranslation()
    const [seconds, setSeconds] = useState(5)
    const navigate = useNavigate();
    useEffect(() => {
        if (seconds <= 0) {
            goBack()
            return
        };

        const timer = setTimeout(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [seconds]);
    const goBack = () => {
        navigate("/");
    };
    return (
        <div className="h-full flex flex-col justify-center items-center ">
            <p className="text-3xl">404</p>
            <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                {t('not_found.desc')}
            </p>
            <p className="text-2xl">{t('not_found.auto_skip', { seconds })}</p>

            <button onClick={goBack} className="block mt-[20px] text-blue-600 cursor-pointer">{t('not_found.back_home')}</button>
        </div>
    )
}
