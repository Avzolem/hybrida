import MainLayout from "@/components/layouts/MainLayout";
import ParticlesBackground from "@/components/hybrida/ParticlesBackground";

export default function Home() {
    return (
        <div>
            <ParticlesBackground />
            <MainLayout
                id="main-layout"
                title="manifest"
                description="Manifesto de  Hybrida"
            >
                <h1>MANIFIESTO*</h1>

                <p>
                    "Todo lo que puedas imaginar es real"
                    <br />- Pablo Picasso
                </p>

                <p>
                    Creemos que el metaverso es una nueva y poderosa frontera
                    para la experimentación, la innovación y la creación de
                    nuevas formas de arte y expresión.
                </p>
                <p>
                    Nuestra misión es crear una plataforma inmersiva para
                    construir puentes entre lo virtual y lo real, entre lo
                    físico y lo imaginado; donde artistas, intérpretes, músicos
                    y pensadores se conecten, creen y exploren.
                </p>
                <p>
                    Buscamos fomentar una cultura de colaboración, co-creación y
                    solidaridad creativa. Creemos que el metaverso ofrece la
                    oportunidad para que personas diversas se conecten, aprendan
                    y creen en comunidad.
                </p>
                <p>
                    Estamos comprometidos a ampliar los límites de lo que es
                    posible en las artes digitales y virtuales. Buscamos crear
                    un espacio que desafíe el status quo, altere las formas
                    tradicionales de arte e inspire nuevas formas de pensar y
                    ver.
                </p>
                <p>
                    Invitamos a todos los artistas, creadores e innovadores a
                    unirse en este viaje. Juntos construiremos un nuevo mundo
                    para celebrar el poder de la imaginación, la colaboración y
                    la comunidad.
                </p>

                <p>* Generado por ChatGPT (V. Feb 13). Mejorado por humanos.</p>
            </MainLayout>
        </div>
    );
}
