import { TransformedHavaintoData } from "../types/TransformedHavainto";

type Props = {
    havainnot: TransformedHavaintoData[];
};

// todo: mieti laitatko destrukturoidusti { havainnot } propsin sijasta
// todo: piilota rivi jos tietoa ei ole ynnä muuta ehdottelua
export function HavainnotPaneeli(props: Props) {
    return (
        <div>
            {props.havainnot.map((havainto, index) => (
                <div key={index}>
                    <h3>{havainto.vernacularName} ({havainto.scientificName})</h3>
                    <p>Päivämäärä: {havainto.displayDateTime}</p>
                    <p>Alue: {havainto.locality}, {havainto.municipalityDisplayname}</p>
                    {havainto.team && (
                        <p>Havaitsija(t): {havainto.team.join(', ')}</p>
                    )}
                    <p>-------------------------</p>
                </div>
            ))}
        </div>
    );
}
