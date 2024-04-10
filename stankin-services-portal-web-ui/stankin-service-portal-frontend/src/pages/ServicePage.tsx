import CustomButton from "../components/UI/CustomButton.tsx";
import CustomModal from "../components/UI/CustomModal.tsx";

function ServicePage() {
    return (
        <>
                <CustomModal
                    title="Предупреждение"
                    description="Данный сервис находится на стадии бета-теста. Могут возникнуть непредвиденные проблемы"
                    icon=
                        {(<svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>)}
                    titleButton="ОК"

                />
            <h2 className="text-center text-3xl font-bold lg:text-5xl dark:text-white my-10">Подайте заявку на получение
                справки прямо из дома !</h2>
            <p className="text-center text-lg text-gray-800 dark:text-gray-200">Ознакомьтесь с перечнем доступных услуг
                ниже и выберите те, в которых вы нуждаетесь.</p>
            <blockquote className="text-center py-6">
                <p className="text-xl font-medium md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal">
                    Уважаемый пользователь, приём онлайн заявок на получение справок обрабатываются не моментально.
                    Обработка заявки занимает в среднем двое суток.
                    Благодарим за понимание !
                </p>
            </blockquote>

            <div>
                <div className="overflow-y-auto">
                    <div
                        className="flex items-end justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div
                            className="bg-stankin-white inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 z-20">
                                <div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <div className='flex justify-between items-center mb-5'>
                                            <h3 className='text-xl text-stankin-black font-semibold'>Выберите
                                                нужные справки</h3>
                                        </div>
                                        <div className='flex flex-col gap-2 mb-7'>
                                            <div className="flex items-center">
                                                <input type="checkbox"
                                                       className="shrink-0 mt-0.5 border-gray-200 rounded text-stankin-red focus:ring-stankin-red disabled:opacity-50 disabled:pointer-events-none"
                                                       id="education"/>
                                                <label htmlFor="education"
                                                       className="ms-3">
                                                    Справка об обучении
                                                </label>
                                            </div>

                                            <div className="flex items-center">
                                                <input type="checkbox"
                                                       className="shrink-0 mt-0.5 border-gray-200 rounded text-stankin-red focus:ring-stankin-red disabled:opacity-50 disabled:pointer-events-none"
                                                       id="enlistment-office"/>
                                                <label htmlFor="enlistment-office"
                                                       className="ms-3">
                                                    Справка для военкомата
                                                </label>
                                            </div>

                                            <div className="flex items-center">
                                                <input type="checkbox"
                                                       className="shrink-0 mt-0.5 border-gray-200 rounded text-stankin-red focus:ring-stankin-red disabled:opacity-50 disabled:pointer-events-none"
                                                       id="academic-performance"/>
                                                <label htmlFor="academic-performance"
                                                       className="ms-3">
                                                    Справка об успеваемости
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input type="checkbox"
                                                       className="shrink-0 mt-0.5 border-gray-200 rounded text-stankin-red focus:ring-stankin-red disabled:opacity-50 disabled:pointer-events-none"
                                                       id="academic-performance"/>
                                                <label htmlFor="income-statement"
                                                       className="ms-3">
                                                    Справка о доходах
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input type="checkbox"
                                                       className="shrink-0 mt-0.5 border-gray-200 rounded text-stankin-red focus:ring-stankin-red disabled:opacity-50 disabled:pointer-events-none"
                                                       id="academic-performance"/>
                                                <label htmlFor="admission-exams"
                                                       className="ms-3">
                                                    Допуск к экзаменам
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 justify-end">
                                            <div className="flex items-center max-w-[200px]">
                                                <input type="checkbox"
                                                       className="w-[22px] h-[22px] shrink-0 mt-0.5 border-gray-200 rounded text-stankin-red focus:ring-stankin-red disabled:opacity-50 disabled:pointer-events-none"
                                                       id="academic-performance"/>
                                                <label htmlFor="academic-performance"
                                                       className="ms-3 font-semibold text-xs">
                                                    Я согласен на обработку персональных данных
                                                </label>
                                            </div>
                                            <CustomButton
                                                styleButton="flex max-w-[150px] w-full justify-center rounded-md bg-stankin-red px-3 py-1.5 text-sm font-semibold leading-6 text-stankin-white shadow-sm transition-colors hover:bg-stankin-white hover:text-stankin-black hover:border-stankin-red border-solid border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stankin-white"
                                                type="button"
                                                onClick={() => {
                                                }}>Далее</CustomButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default ServicePage;