import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, FormErrorMessage, Button } from "@chakra-ui/react";
import { Select } from "@chakra-ui/select";
import { Formik, Form, Field } from "formik";
import { useState } from "react";

const VehicleIdentification = () => {
    const [make, setMake] = useState('');
    const [userType, setUserType] = useState('');

    const changeMake = (event: any) => {
        const newMake = event.target.value;
        setMake(newMake);
    }

    const changeUserType = (event: any) => {
        const newUserType = event.target.value;
        setUserType(newUserType);
    }

    const validateVehicleIdentificationNumber = (value: string) => {
        let error
        if (!value) {
            error = 'VIN is required'
        } else if (!value.match(/^(?=.*[0-9])(?=.*[A-z])[0-9A-z-]{17}$/)) {
            error = "VIN expression is not correct"
        }
        console.log(error);

        return error
    }

    const validateYear = (value: string) => {
        let error
        if (!value) {
            error = 'Year is required'
        } else if (!value.match(/^\d{4}$/)) {
            error = "Year expression is not correct"
        }
        console.log(error);

        return error
    }

    return (
        <Formik
            enableReinitialize={true}
            initialValues={{ vin: '', year: '', make: '', userType: '' }}
            onSubmit={(values, actions) => {
                console.log(values, actions);
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                    actions.setSubmitting(false)
                }, 1000)
            }}
        >
            {({ isSubmitting, submitForm, isValid, dirty, errors, values }) => (
                <Form>
                    <Field name='vin' validate={validateVehicleIdentificationNumber}>
                        {({ field, form }: any) => (
                            <FormControl isInvalid={form.errors.name && form.touched.name}>
                                <FormLabel htmlFor='vin'>Vehicle Identification Number</FormLabel>
                                <Input {...field} id='vin' placeholder='Vehicle Identification Number'/>
                                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Field name='year' validate={validateYear}>
                        {({ field, form }: any) => (
                            <FormControl isInvalid={form.errors.name && form.touched.name}>
                                <FormLabel htmlFor='year'>Year</FormLabel>
                                <Input {...field} id='year' placeholder='Year' />
                                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Field name='make'>
                        {({ field, form }: any) => (
                            <FormControl id='make' onChange={changeMake} value={make}>
                                <FormLabel>Make</FormLabel>
                                <Select placeholder='Make'>
                                    <option value="AMC">AMC</option>
                                    <option value="Ac Cobra">Ac Cobra</option>
                                    <option value="Acura">Acura</option>
                                    <option value="Aerocar">Aerocar</option>
                                    <option value="Airstream">Airstream</option>
                                    <option value="Ajax Trailer Co">Ajax Trailer Co</option>
                                    <option value="Alabama Trailer">Alabama Trailer</option>
                                    <option value="Alfa Romeo">Alfa Romeo</option>
                                    <option value="Alfab, Inc">Alfab, Inc</option>
                                    <option value="Alouette">Alouette</option>
                                    <option value="Alphasports">Alphasports</option>
                                    <option value="Am General">Am General</option>
                                    <option value="American IronHorse">American IronHorse</option>
                                    <option value="American Motors">American Motors</option>
                                    <option value="Amf Lawn &amp; Garden Div">Amf Lawn &amp; Garden Div</option>
                                    <option value="Apache">Apache</option>
                                    <option value="Aprilia">Aprilia</option>
                                    <option value="Arctic Cat">Arctic Cat</option>
                                    <option value="Argosy Travel Trailer">Argosy Travel Trailer</option>
                                    <option value="Arrow">Arrow</option>
                                    <option value="Aston-Martin">Aston-Martin</option>
                                    <option value="Asuna">Asuna</option>
                                    <option value="Audi">Audi</option>
                                    <option value="Aurora">Aurora</option>
                                    <option value="Austin">Austin</option>
                                    <option value="Austin-Healy">Austin-Healy</option>
                                    <option value="Autocar">Autocar</option>
                                    <option value="Avanti">Avanti</option>
                                    <option value="Azure Dynamics Corporation">Azure Dynamics Corporation</option>
                                    <option value="BCI">BCI</option>
                                    <option value="Bandit Industries">Bandit Industries</option>
                                    <option value="Bennche">Bennche</option>
                                    <option value="Benson">Benson</option>
                                    <option value="Bentley">Bentley</option>
                                    <option value="Bering Truck Distributor">Bering Truck Distributor</option>
                                    <option value="Bertone">Bertone</option>
                                    <option value="Big Bear Choppers">Big Bear Choppers</option>
                                    <option value="Big Dog">Big Dog</option>
                                    <option value="Birmingham Mfg">Birmingham Mfg</option>
                                    <option value="Bitter">Bitter</option>
                                    <option value="Black Knight">Black Knight</option>
                                    <option value="Blue Bird">Blue Bird</option>
                                    <option value="Blue Ridge Pre-Built Mobile Homes">Blue Ridge Pre-Built Mobile Homes</option>
                                    <option value="Bmc">Bmc</option>
                                    <option value="Bmw">Bmw</option>
                                    <option value="Bobcat">Bobcat</option>
                                    <option value="Bombardier">Bombardier</option>
                                    <option value="Borgward">Borgward</option>
                                    <option value="Bounder">Bounder</option>
                                    <option value="Bradley Gt">Bradley Gt</option>
                                    <option value="Brammo">Brammo</option>
                                    <option value="Brenner">Brenner</option>
                                    <option value="Bricklin">Bricklin</option>
                                    <option value="Bristol">Bristol</option>
                                    <option value="Broken Arrow Mobile Home">Broken Arrow Mobile Home</option>
                                    <option value="Bsa">Bsa</option>
                                    <option value="Budd Co. Trailer Division">Budd Co. Trailer Division</option>
                                    <option value="Buell">Buell</option>
                                    <option value="Buffalo Springfield">Buffalo Springfield</option>
                                    <option value="Bugatti">Bugatti</option>
                                    <option value="Buick">Buick</option>
                                    <option value="CFMOTO">CFMOTO</option>
                                    <option value="CSC Motorcycles">CSC Motorcycles</option>
                                    <option value="Cadillac">Cadillac</option>
                                    <option value="California Scooter Co.">California Scooter Co.</option>
                                    <option value="Calkins Trailer">Calkins Trailer</option>
                                    <option value="Campagna Moto Sport">Campagna Moto Sport</option>
                                    <option value="Can-Am Atv">Can-Am Atv</option>
                                    <option value="Can-Am Atv">Can-Am Atv</option>
                                    <option value="Capacity">Capacity</option>
                                    <option value="Capri">Capri</option>
                                    <option value="Capri">Capri</option>
                                    <option value="Car Mate Trailers">Car Mate Trailers</option>
                                    <option value="Case">Case</option>
                                    <option value="Caterpillar Tractor">Caterpillar Tractor</option>
                                    <option value="Champion">Champion</option>
                                    <option value="Checker">Checker</option>
                                    <option value="Chevrolet">Chevrolet</option>
                                    <option value="Chrysler">Chrysler</option>
                                    <option value="Cisitalia">Cisitalia</option>
                                    <option value="Citicar">Citicar</option>
                                    <option value="Citroen">Citroen</option>
                                    <option value="Clark Equip. Company">Clark Equip. Company</option>
                                    <option value="Clement Braswell">Clement Braswell</option>
                                    <option value="Clenet Coach Works">Clenet Coach Works</option>
                                    <option value="Cocar">Cocar</option>
                                    <option value="Collins Bus">Collins Bus</option>
                                    <option value="Colt">Colt</option>
                                    <option value="Conchemco Homes Group">Conchemco Homes Group</option>
                                    <option value="Concord">Concord</option>
                                    <option value="Consulier">Consulier</option>
                                    <option value="Continental">Continental</option>
                                    <option value="Covan (Limited Use Auto)">Covan (Limited Use Auto)</option>
                                    <option value="Crane Carrier">Crane Carrier</option>
                                    <option value="Crane Carrier">Crane Carrier</option>
                                    <option value="Custom Trailers">Custom Trailers</option>
                                    <option value="Daewoo">Daewoo</option>
                                    <option value="Daihatsu">Daihatsu</option>
                                    <option value="Datsun">Datsun</option>
                                    <option value="Delorean">Delorean</option>
                                    <option value="Derbi Motor Corp">Derbi Motor Corp</option>
                                    <option value="Desoto">Desoto</option>
                                    <option value="Detomaso">Detomaso</option>
                                    <option value="Diamond Reo">Diamond Reo</option>
                                    <option value="Diamond T">Diamond T</option>
                                    <option value="Diplomat">Diplomat</option>
                                    <option value="Divco">Divco</option>
                                    <option value="Dodge">Dodge</option>
                                    <option value="Doolittle">Doolittle</option>
                                    <option value="Dorsey Trailer">Dorsey Trailer</option>
                                    <option value="Ducati">Ducati</option>
                                    <option value="Duesenberg">Duesenberg</option>
                                    <option value="Duplex Truck">Duplex Truck</option>
                                    <option value="E-TON">E-TON</option>
                                    <option value="Eagle International">Eagle International</option>
                                    <option value="Eagle">Eagle</option>
                                    <option value="East Dump Trailer">East Dump Trailer</option>
                                    <option value="Easton Car &amp; Construction">Easton Car &amp; Construction</option>
                                    <option value="Easy Loader Trailer">Easy Loader Trailer</option>
                                    <option value="Edsel">Edsel</option>
                                    <option value="Eldorado">Eldorado</option>
                                    <option value="Elgin Sweeper">Elgin Sweeper</option>
                                    <option value="English Ford">English Ford</option>
                                    <option value="Erik Buell Racing">Erik Buell Racing</option>
                                    <option value="Escapade">Escapade</option>
                                    <option value="Essex">Essex</option>
                                    <option value="Excalibur">Excalibur</option>
                                    <option value="Explorer Motor Home">Explorer Motor Home</option>
                                    <option value="Ez Dumper Trailers">Ez Dumper Trailers</option>
                                    <option value="Falcon">Falcon</option>
                                    <option value="Fastline Ltd">Fastline Ltd</option>
                                    <option value="Federal Motors">Federal Motors</option>
                                    <option value="Fellwon Trailer">Fellwon Trailer</option>
                                    <option value="Ferrari">Ferrari</option>
                                    <option value="Fiat">Fiat</option>
                                    <option value="Fischer">Fischer</option>
                                    <option value="Fisker Automotive">Fisker Automotive</option>
                                    <option value="Five Star Engineering, Inc">Five Star Engineering, Inc</option>
                                    <option value="Fleetwood Motor Home">Fleetwood Motor Home</option>
                                    <option value="Flxible Bus Co">Flxible Bus Co</option>
                                    <option value="Flyscooters">Flyscooters</option>
                                    <option value="Fmc">Fmc</option>
                                    <option value="Fontaine Truck">Fontaine Truck</option>
                                    <option value="Ford">Ford</option>
                                    <option value="Franklin">Franklin</option>
                                    <option value="Frauhauf">Frauhauf</option>
                                    <option value="Freightliner Corp">Freightliner Corp</option>
                                    <option value="Fws">Fws</option>
                                    <option value="GAS GAS">GAS GAS</option>
                                    <option value="Gem">Gem</option>
                                    <option value="General Shelters">General Shelters</option>
                                    <option value="Genesis">Genesis</option>
                                    <option value="Genie">Genie</option>
                                    <option value="Genuine Scooter Co.">Genuine Scooter Co.</option>
                                    <option value="Geo">Geo</option>
                                    <option value="Gillig Corporation">Gillig Corporation</option>
                                    <option value="Gindy">Gindy</option>
                                    <option value="Glassic">Glassic</option>
                                    <option value="Gm">Gm</option>
                                    <option value="Gmc">Gmc</option>
                                    <option value="Great Dane Trailers">Great Dane Trailers</option>
                                    <option value="Grumman">Grumman</option>
                                    <option value="Hallmark">Hallmark</option>
                                    <option value="Harley Davidson">Harley Davidson</option>
                                    <option value="Haulette Trailer">Haulette Trailer</option>
                                    <option value="Heil">Heil</option>
                                    <option value="Highway Trailer">Highway Trailer</option>
                                    <option value="Hino">Hino</option>
                                    <option value="Hisun">Hisun</option>
                                    <option value="Hobbs Trailers">Hobbs Trailers</option>
                                    <option value="Hodaka">Hodaka</option>
                                    <option value="Holiday Rambler">Holiday Rambler</option>
                                    <option value="Homemade Motorcycle">Homemade Motorcycle</option>
                                    <option value="Homemade">Homemade</option>
                                    <option value="Homette">Homette</option>
                                    <option value="Honda">Honda</option>
                                    <option value="Horton">Horton</option>
                                    <option value="Hudson Trailer">Hudson Trailer</option>
                                    <option value="Hudson">Hudson</option>
                                    <option value="Hummer">Hummer</option>
                                    <option value="Husaberg">Husaberg</option>
                                    <option value="Husqvarna">Husqvarna</option>
                                    <option value="Hyosung">Hyosung</option>
                                    <option value="Hyundai">Hyundai</option>
                                    <option value="IC Bus">IC Bus</option>
                                    <option value="Imperial">Imperial</option>
                                    <option value="Indian Motorcycles">Indian Motorcycles</option>
                                    <option value="Infiniti">Infiniti</option>
                                    <option value="Ingersoll-Rand Co">Ingersoll-Rand Co</option>
                                    <option value="International Harvester">International Harvester</option>
                                    <option value="Irondog Trailers">Irondog Trailers</option>
                                    <option value="Islander Motor Home">Islander Motor Home</option>
                                    <option value="Iso">Iso</option>
                                    <option value="Isuzu">Isuzu</option>
                                    <option value="Italjet">Italjet</option>
                                    <option value="Itasca Motor Home">Itasca Motor Home</option>
                                    <option value="Iveco Trucks">Iveco Trucks</option>
                                    <option value="Jaguar">Jaguar</option>
                                    <option value="Jawa">Jawa</option>
                                    <option value="Jcb Excavators">Jcb Excavators</option>
                                    <option value="Jeep">Jeep</option>
                                    <option value="Jensen">Jensen</option>
                                    <option value="Jerr-Dan">Jerr-Dan</option>
                                    <option value="John Deere">John Deere</option>
                                    <option value="Kaiser">Kaiser</option>
                                    <option value="Kalmar">Kalmar</option>
                                    <option value="Karavan Trailers, Inc">Karavan Trailers, Inc</option>
                                    <option value="Kari Kool Trailer">Kari Kool Trailer</option>
                                    <option value="Kawasaki">Kawasaki</option>
                                    <option value="Kawasaki">Kawasaki</option>
                                    <option value="Kenny Boyce Motorcycles">Kenny Boyce Motorcycles</option>
                                    <option value="Kentucky Mfg">Kentucky Mfg</option>
                                    <option value="Kenworth Northwest">Kenworth Northwest</option>
                                    <option value="Kenworth">Kenworth</option>
                                    <option value="Keystone Rv Co">Keystone Rv Co</option>
                                    <option value="Kia Motor Company">Kia Motor Company</option>
                                    <option value="Kodiak">Kodiak</option>
                                    <option value="Komatsu American Corp">Komatsu American Corp</option>
                                    <option value="Ktm">Ktm</option>
                                    <option value="Kw Dart">Kw Dart</option>
                                    <option value="Kymco Scooters &amp; Motorcycles">Kymco Scooters &amp; Motorcycles</option>
                                    <option value="Lada">Lada</option>
                                    <option value="Laforza Utility Vehicle">Laforza Utility Vehicle</option>
                                    <option value="Lamborghini">Lamborghini</option>
                                    <option value="Lambretta">Lambretta</option>
                                    <option value="Lance">Lance</option>
                                    <option value="Lancia">Lancia</option>
                                    <option value="Land Rover">Land Rover</option>
                                    <option value="Landau Motor Home">Landau Motor Home</option>
                                    <option value="Lexus">Lexus</option>
                                    <option value="Liberty, Inc">Liberty, Inc</option>
                                    <option value="Liebherr">Liebherr</option>
                                    <option value="Lincoln">Lincoln</option>
                                    <option value="Load Boss, Inc">Load Boss, Inc</option>
                                    <option value="Loadmaster, Inc">Loadmaster, Inc</option>
                                    <option value="Long Mfg">Long Mfg</option>
                                    <option value="Lotus">Lotus</option>
                                    <option value="Lufkin Trailers">Lufkin Trailers</option>
                                    <option value="MV Agusta">MV Agusta</option>
                                    <option value="Mack Trucks">Mack Trucks</option>
                                    <option value="Madami Motor Scooters">Madami Motor Scooters</option>
                                    <option value="Marmon Harrington">Marmon Harrington</option>
                                    <option value="Maserati">Maserati</option>
                                    <option value="Massey-Furguson">Massey-Furguson</option>
                                    <option value="Massimo">Massimo</option>
                                    <option value="Maybach">Maybach</option>
                                    <option value="Mazda">Mazda</option>
                                    <option value="Mclaren">Mclaren</option>
                                    <option value="Melroe Div">Melroe Div</option>
                                    <option value="Mercedes Benz">Mercedes Benz</option>
                                    <option value="Mercury">Mercury</option>
                                    <option value="Merkur">Merkur</option>
                                    <option value="Messerschmitt">Messerschmitt</option>
                                    <option value="Metropolitan">Metropolitan</option>
                                    <option value="Mg">Mg</option>
                                    <option value="Mickey Truck Bodies">Mickey Truck Bodies</option>
                                    <option value="Midas Motor Home">Midas Motor Home</option>
                                    <option value="Mighty Mover Trailers, Inc">Mighty Mover Trailers, Inc</option>
                                    <option value="Miller Trailers">Miller Trailers</option>
                                    <option value="Mini (Cooper/Cooper-S)">Mini (Cooper/Cooper-S)</option>
                                    <option value="Mitsubishi Fuso">Mitsubishi Fuso</option>
                                    <option value="Mitsubishi">Mitsubishi</option>
                                    <option value="Monarch">Monarch</option>
                                    <option value="Monon Trailer Div">Monon Trailer Div</option>
                                    <option value="Montone Mfg">Montone Mfg</option>
                                    <option value="Morgan">Morgan</option>
                                    <option value="Morris">Morris</option>
                                    <option value="Moskovich">Moskovich</option>
                                    <option value="Moto Beta">Moto Beta</option>
                                    <option value="Moto Guzzi">Moto Guzzi</option>
                                    <option value="Motor Coach Industries">Motor Coach Industries</option>
                                    <option value="Motus">Motus</option>
                                    <option value="Muntz">Muntz</option>
                                    <option value="Mz">Mz</option>
                                    <option value="Nabors Trailers">Nabors Trailers</option>
                                    <option value="Nash">Nash</option>
                                    <option value="Navistar">Navistar</option>
                                    <option value="New Flyer">New Flyer</option>
                                    <option value="Newell">Newell</option>
                                    <option value="Newport">Newport</option>
                                    <option value="Nissan Diesel Motor Co">Nissan Diesel Motor Co</option>
                                    <option value="Nissan">Nissan</option>
                                    <option value="Northwest Custom Trailer">Northwest Custom Trailer</option>
                                    <option value="Norton">Norton</option>
                                    <option value="Nova Bus">Nova Bus</option>
                                    <option value="Odyssey">Odyssey</option>
                                    <option value="Oldsmobile">Oldsmobile</option>
                                    <option value="Olympia">Olympia</option>
                                    <option value="Opel">Opel</option>
                                    <option value="Orion">Orion</option>
                                    <option value="Oshkosh Motor Truck">Oshkosh Motor Truck</option>
                                    <option value="Other">Other</option>
                                    <option value="Overland Motor Homes">Overland Motor Homes</option>
                                    <option value="Overland">Overland</option>
                                    <option value="Pace Arrow">Pace Arrow</option>
                                    <option value="Packard">Packard</option>
                                    <option value="Panhard">Panhard</option>
                                    <option value="Panoz">Panoz</option>
                                    <option value="Passport">Passport</option>
                                    <option value="Peirspeed">Peirspeed</option>
                                    <option value="Peterbuilt Motors">Peterbuilt Motors</option>
                                    <option value="Peugeot">Peugeot</option>
                                    <option value="Phoenix">Phoenix</option>
                                    <option value="Piaggio">Piaggio</option>
                                    <option value="Pierce Arrow">Pierce Arrow</option>
                                    <option value="Plymouth">Plymouth</option>
                                    <option value="Polar Mfg">Polar Mfg</option>
                                    <option value="Polaris">Polaris</option>
                                    <option value="Pontiac">Pontiac</option>
                                    <option value="Pontiac">Pontiac</option>
                                    <option value="Porsche">Porsche</option>
                                    <option value="Prevost">Prevost</option>
                                    <option value="Puch">Puch</option>
                                    <option value="QLINK">QLINK</option>
                                    <option value="Ram">Ram</option>
                                    <option value="Rambler">Rambler</option>
                                    <option value="Range Rover">Range Rover</option>
                                    <option value="Reliant">Reliant</option>
                                    <option value="Renault">Renault</option>
                                    <option value="Reo">Reo</option>
                                    <option value="Riley">Riley</option>
                                    <option value="Rocket Trailer, Ltd">Rocket Trailer, Ltd</option>
                                    <option value="Rolls-Royce">Rolls-Royce</option>
                                    <option value="Rover">Rover</option>
                                    <option value="Royal Enfield">Royal Enfield</option>
                                    <option value="SYM">SYM</option>
                                    <option value="Saab Scania Of America">Saab Scania Of America</option>
                                    <option value="Saab">Saab</option>
                                    <option value="Saturn Corporation">Saturn Corporation</option>
                                    <option value="Saturn">Saturn</option>
                                    <option value="Saxon Motorcycle">Saxon Motorcycle</option>
                                    <option value="Schwinn">Schwinn</option>
                                    <option value="Scion">Scion</option>
                                    <option value="Se/Ce (Limited Use Auto)">Se/Ce (Limited Use Auto)</option>
                                    <option value="Sears">Sears</option>
                                    <option value="Setra">Setra</option>
                                    <option value="Shasta Motor Home">Shasta Motor Home</option>
                                    <option value="Shelby American">Shelby American</option>
                                    <option value="Simca">Simca</option>
                                    <option value="Skat-Kitty">Skat-Kitty</option>
                                    <option value="Ski-Doo">Ski-Doo</option>
                                    <option value="Smart">Smart</option>
                                    <option value="Sparta">Sparta</option>
                                    <option value="Sprinter">Sprinter</option>
                                    <option value="Ssi">Ssi</option>
                                    <option value="Starcraft">Starcraft</option>
                                    <option value="Sterling">Sterling</option>
                                    <option value="Sterling">Sterling</option>
                                    <option value="Steyr-Daimler-Puch">Steyr-Daimler-Puch</option>
                                    <option value="Stoughton Trailers">Stoughton Trailers</option>
                                    <option value="Streamline Motor Home">Streamline Motor Home</option>
                                    <option value="Strick Trailers">Strick Trailers</option>
                                    <option value="Studebaker">Studebaker</option>
                                    <option value="Stutz">Stutz</option>
                                    <option value="Subaru">Subaru</option>
                                    <option value="Sunbeam">Sunbeam</option>
                                    <option value="Superior">Superior</option>
                                    <option value="Suzuki">Suzuki</option>
                                    <option value="Swinger">Swinger</option>
                                    <option value="Tdeurer Atlantic">Tdeurer Atlantic</option>
                                    <option value="Tec">Tec</option>
                                    <option value="Temsa">Temsa</option>
                                    <option value="Terex">Terex</option>
                                    <option value="Tesla Motors">Tesla Motors</option>
                                    <option value="Textron Off Road">Textron Off Road</option>
                                    <option value="Thomas Built Buses">Thomas Built Buses</option>
                                    <option value="Timpte">Timpte</option>
                                    <option value="Tioga Motor Home">Tioga Motor Home</option>
                                    <option value="Tomberlin">Tomberlin</option>
                                    <option value="Tomos">Tomos</option>
                                    <option value="Toro Co">Toro Co</option>
                                    <option value="Toyota">Toyota</option>
                                    <option value="Trabant">Trabant</option>
                                    <option value="Trailco">Trailco</option>
                                    <option value="Trailex">Trailex</option>
                                    <option value="Transcraft Corp">Transcraft Corp</option>
                                    <option value="Transportation Mfg. Corp">Transportation Mfg. Corp</option>
                                    <option value="Travco Corp">Travco Corp</option>
                                    <option value="Trek">Trek</option>
                                    <option value="Triumph">Triumph</option>
                                    <option value="Trojan">Trojan</option>
                                    <option value="Tucker">Tucker</option>
                                    <option value="Tvr">Tvr</option>
                                    <option value="UD Trucks">UD Trucks</option>
                                    <option value="Uhaul">Uhaul</option>
                                    <option value="United Motors">United Motors</option>
                                    <option value="Unpublished Motorcycle Mfr">Unpublished Motorcycle Mfr</option>
                                    <option value="Ural">Ural</option>
                                    <option value="Utilimaster">Utilimaster</option>
                                    <option value="Utility Trailer Mfg">Utility Trailer Mfg</option>
                                    <option value="Vacationar">Vacationar</option>
                                    <option value="Vagabond">Vagabond</option>
                                    <option value="Van Hool">Van Hool</option>
                                    <option value="Vauxhall">Vauxhall</option>
                                    <option value="Vector Automotive">Vector Automotive</option>
                                    <option value="Vectrix">Vectrix</option>
                                    <option value="Vento Motorcycles">Vento Motorcycles</option>
                                    <option value="Venus">Venus</option>
                                    <option value="Vespa">Vespa</option>
                                    <option value="Victory Motorcycles">Victory Motorcycles</option>
                                    <option value="Volga">Volga</option>
                                    <option value="Volkswagen">Volkswagen</option>
                                    <option value="Volvo White">Volvo White</option>
                                    <option value="Volvo">Volvo</option>
                                    <option value="Walker">Walker</option>
                                    <option value="Ward Lafrance International">Ward Lafrance International</option>
                                    <option value="Wartburg">Wartburg</option>
                                    <option value="Wells Cargo">Wells Cargo</option>
                                    <option value="Western Star">Western Star</option>
                                    <option value="White Gmc">White Gmc</option>
                                    <option value="White Motor Corp">White Motor Corp</option>
                                    <option value="Willys">Willys</option>
                                    <option value="Winnebago Industries">Winnebago Industries</option>
                                    <option value="Workhorse Custom Chasis">Workhorse Custom Chasis</option>
                                    <option value="Yacht Club">Yacht Club</option>
                                    <option value="Yamaha">Yamaha</option>
                                    <option value="Yugo">Yugo</option>
                                    <option value="Yugo">Yugo</option>
                                    <option value="Zero">Zero</option>
                                    <option value="Zimmer">Zimmer</option>
                                </Select>
                            </FormControl>
                        )}
                    </Field>
                    <Field name='user-type'>
                        {({ field, form }: any) => (
                            <FormControl id='user-type' onChange={changeUserType} value={userType}>
                                <FormLabel>User Type</FormLabel>
                                <Select placeholder='Tell us about yourself, are you?'>
                                    <option value="ANOTHER_STATE_OR_DMV_JURISDICTION">Another State/DMV Jurisdiction</option>
                                    <option value="CHECKING_RETAIL_PURCHASE">Checking Retail Purchase</option>
                                    <option value="CHECKING_WHOLESALE_PURCHASE">Checking Wholesale Purchase</option>
                                    <option value="NYS_DEALER">A NYS Dealer</option>
                                </Select>
                            </FormControl>
                        )}
                    </Field>
                    <Button
                        mt={4}
                        colorScheme='teal'
                        isLoading={isSubmitting}
                        onClick={submitForm}
                        type='submit'
                    >
                        Submit
                    </Button>
                </Form>
            )
            }
        </Formik >
    )
}

export default VehicleIdentification;