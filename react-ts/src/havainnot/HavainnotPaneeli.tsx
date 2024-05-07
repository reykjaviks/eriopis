import { TransformedHavaintoData } from "../types/TransformedHavainto";

type Props = {
    havainnot: TransformedHavaintoData[];
};

// todo: mieti laitatko destrukturoidusti { havainnot } propsin sijasta
// todo: piilota rivi jos tietoa ei ole ynnä muuta ehdottelua
export function HavainnotPaneeli(props: Props) {
    return (
        <div className="inline-flex flex-row">
            {props.havainnot.map((havainto, index) => (
                <div key={index} className="bg-white border shadow-sm rounded-xl w-64 m-4">
                    <img
                        className="w-full h-auto rounded-t-xl"
                        src="https://images.unsplash.com/photo-1533048324814-79b0a31982f1?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Image Description">

                    </img>
                    <div className="p-4 md:p-5">
                        <h3 className="text-lg font-bold text-gray-800">
                            {havainto.vernacularName}
                        </h3>
                        <p className="mt-1 text-gray-500">
                            {havainto.locality}
                        </p>
                        <a className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                            Lajikuvaus
                        </a>
                    </div>
                </div>
            ))}
        </div>

    );
}
