// todo: välitä havainnot parametrina + tyypitä havainnot
type Props = {
    havainto: string;
};

export function HavainnotPaneeli({havainto}: Props) {
    return (
        <div>
            <h3>Päivän ensimmäinen havainto</h3>
            <p>{ havainto }</p>
        </div>
    );
}
