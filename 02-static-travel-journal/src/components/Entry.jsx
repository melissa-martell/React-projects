export default function Entry({entry}) {
    return (
        <article className="travel-container">
            <div className="travel-img-container">
                <img src={ entry.picture.imgLink } alt={ entry.picture.alt }/>
            </div>
            <div className="travel-info-container">
                <div className="travel-info-header">
                    <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.0" width="15" height="15" viewBox="0 0 830.000000 1280.000000" preserveAspectRatio="xMidYMid meet">
                        <metadata>
                        Created by potrace 1.15, written by Peter Selinger 2001-2017
                        </metadata>
                        <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#f24141" stroke="none">
                        <path d="M3855 12789 c-555 -44 -1043 -176 -1530 -414 -1457 -712 -2370 -2223 -2322 -3840 19 -605 152 -1155 406 -1680 109 -225 183 -353 331 -575 65 -96 856 -1369 1760 -2827 903 -1459 1646 -2653 1650 -2653 4 0 747 1194 1650 2652 904 1459 1695 2732 1760 2828 148 222 222 350 331 575 421 869 520 1869 279 2821 -244 958 -822 1795 -1640 2371 -696 491 -1551 759 -2404 752 -94 -1 -216 -5 -271 -10z m635 -1764 c440 -80 813 -271 1120 -575 769 -761 825 -1980 130 -2812 -335 -402 -817 -663 -1344 -728 -114 -14 -378 -14 -492 0 -853 105 -1550 715 -1764 1544 -141 545 -52 1136 243 1613 330 531 862 876 1497 968 130 19 481 13 610 -10z"></path>
                        </g>
                    </svg>
                    <span>{entry.country}</span>
                    <a href={entry.mapsLink}>View on Google Maps</a>
                </div>
                <h2 className="travel-title">{entry.destination}</h2>
                <p className="travel-date">{entry.date}</p>
                <p className="travel-text">{entry.text}</p>
            </div>
        </article>
    )
}