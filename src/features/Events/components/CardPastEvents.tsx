import imgEvents from '/imgEvents.png';
import iconDate from '/public/iconDate.png';
import iconLocation from '/iconLocation.png';

function CardPastEvents({title, image, date, location, description }:{title:string, image:string, date:string, location:string, description:string}) {
    return (
        <div className="card-past-event w-full flex flex-col items-center bg-primary max-w-[400px] border rounded-3xl shadow md:flex-row md:max-w-4xl">
            <img className="object-cover w-full rounded-t-3xl min-h-48 md:h-auto md:w-72 md:rounded-none md:rounded-s-3xl" src={image || imgEvents} alt="" />
            <div className="flex flex-col w-full justify-between p-4 mr-4 leading-normal">
                <h5 className="card-title pl-2 mb-2 font-bold text-secondary">{title}</h5>
                <div className="flex items-center gap-2 mb-2">
                    <img src={iconDate} alt="Icon date" className="opacity-70 h-4 pl-2"/>
                    <p className="text-bodyText text-contrast/80">{date}</p>
                </div>
                <div className="flex items-center gap-2 pl-2">
                    <img src={iconLocation} alt="Icon date" className="opacity-70 h-4"/>
                    <p className="text-bodyText text-contrast/80">{location}</p>
                </div>
                <p className="pt-3 pl-2 text-bodyText text-contrast">{description}</p>
            </div>
        </div>
    );
}

export default CardPastEvents;

