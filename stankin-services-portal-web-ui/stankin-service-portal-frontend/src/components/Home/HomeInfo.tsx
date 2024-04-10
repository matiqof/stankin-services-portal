import {Link} from "react-router-dom";

const HomeInfo = () => {
    return <div>
        <h1 className="text-4xl max-w-[380px] mb-14 font-medium">
            Закажи справку из <span className="text-stankin-red">СТАНКИН</span> онлайн
        </h1>

        <div className="text-2xl max-w-[350px] mb-10">
            <h2 className="mb-7">Список возможных справок для получения:</h2>
            <ul className="list-disc pl-9">
                <li>Справка об обучении</li>
                <li>Справка для военкомата</li>
                <li>Справка о доходах</li>
                <li>Справка об успеваемости</li>
                <li>Допуск к экзаменам</li>
            </ul>
        </div>

        <Link to='/auth' className="link-to-auth text-2xl text-stankin-gray text-right uppercase flex items-center justify-end gap-2">
            Войти
            <svg className="transition" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24" fill="none">
                <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="#9C0C0C" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>
        </Link>

    </div>
}

export default HomeInfo;