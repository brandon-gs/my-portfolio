/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from "react";
import Head from "next/head";
import { Navbar, BottomMenu } from "components";
import { Box, Container, Grid, Paper, Typography } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import { useTranslation } from "hooks";

const webItems = [
  {
    descriptionEn:
      "The web system displays a login page when you are not logged in. It has route protection to redirect to the login page in case of trying to access a page without having logged in.",
    descriptionEs:
      "El sistema web muestra una página de login cuando no se tiene una sesión iniciada. Tiene protección de rutas para redireccionar a la página de login en caso de intentar acceder a una página sin haber iniciado sesión.",
    image: "preview.png",
  },
  {
    descriptionEn:
      "On the left you can see a navigation bar that allows you to manage the system of users, clients, projects, machines and vehicles.",
    descriptionEs:
      "A la izquierda se puede ver una barra de navegación que te permite administrar el sistema de usuarios, clientes, projectos, maquinas y vehículos.",
    image: "create_user.png",
  },
  {
    descriptionEn:
      "The panel contains a section where you can see all the information or filter it by client, project, machines and vehicles. Additional information such as expenses can also be viewed. ",
    descriptionEs:
      "El panel contiene una sección donde puedes ver toda la información o filtrarla por cliente, proyecto, maquinas y vehículos. También se puede ver información adicional como los gastos.",
    image: "filters_2.png",
  },
  {
    descriptionEn:
      "You can convert the filtered or unfiltered information to an excel file (.xlsx) by pressing in a download button.",
    descriptionEs:
      "Puedes convertir la información filtrada o sin filtrar a un archivo de excel (.xlsx) presionando en el botón de descarga.",
    image: "excel_file.png",
  },
];

const appItems = [
  {
    descriptionEn:
      "The mobile app displays a login screen when you are not logged in. The authentication is controlled by a token.",
    descriptionEs:
      "La aplicación móvil muestra una pantalla de login cuando no has iniciado sesión. La autenticación es controllada por un token.",
    image: "app_login.png",
  },
  {
    descriptionEn:
      "You can edit the profile by uploading an image, changing your name, your position and you can also change your password.",
    descriptionEs:
      "Se puede editar el perfil subiendo una imágen, cambiando tu nombre, tu cargo y también puedes cambiar tu contraseña.",
    image: "app_profile.png",
  },
  {
    descriptionEn:
      "You can view the jobs you have created or create a new one.",
    descriptionEs: "Puedes ver los trabajos que has creado o crear uno nuevo.",
    image: "app_works.png",
  },
  {
    descriptionEn:
      "You can edit a job that you have previously created or finish filling in the information.You can also mark the job as finished.",
    descriptionEs:
      "Puedes editar un trabajo que hayas creado anteriormente o terminar de llenar la información. También puedes marcar el trabajo como finalizado.",
    image: "app_work_edit.png",
  },
  {
    descriptionEn:
      "You can see the history of all the projects you have created grouped by date.",
    descriptionEs:
      "Puedes ver el historial de todos los proyectos que has creado agrupados por fecha.",
    image: "app_history.png",
  },
];

const localeEs = {
  title: "Administrador de trabajos",
  description:
    "Desarrolle este sistema contactando con un cliente a través de una plataforma de freelance, por lo que este sistema fue diseñado para una empresa de España. Tengo permiso para mostrar que soy el autor del proyecto, pero es un proyecto privado y esa es la razón por la que no puedo compartir el código de github. Debajo se encuentra una explicación sobre lo que se realizo en el proyecto.",
  backend: {
    description:
      "El backend de este proyecto se desarrolló con php, aquí se manejan las consultas (con SQL) necesarias para administrar el sistema de usuarios, clientes, proyectos y máquinas de la empresa, también se implementó la autenticación a través de jwt y se maneja la carga de archivos a la nube .",
  },
  web: {
    description:
      "Panel de administración web mediante React que permite gestionar usuarios, clientes, proyectos y maquinaria a disposición de la empresa, así como filtrar la información y exportarla en archivos excel.",
  },
  app: {
    title: "Aplicación móvil",
    description:
      "La aplicación móvil fue desarrollada con el framework React Native. Los empleados utilizan la aplicación para gestionar los trabajos que han realizado.",
  },
};

const localeEn = {
  title: "Job management",
  description:
    "I develop this system by contacting a customer at through a freelance platform, so this system It was designed for a company in Spain. I have permission to show that I am the author of the project, but it is a project private and that's the reason why I can't share the github code. Below is an explanation of what was done in the project.",
  backend: {
    description:
      "The backend of this project was developed with php, here the necessary queries (with SQL) are handled to manage the system of users, clients, projects and machines of the company, authentication was also implemented through jwt and the uploading of files to the cloud is handled.",
  },
  web: {
    description:
      " Web administration panel using React that allows managing users, clients, projects and machinery available to the company, as well as filtering the information and exporting it in excel files.",
  },
  app: {
    title: "Mobile app",
    description:
      "The mobile application was developed with the React Native framework. The application is used by employees to manage the jobs they have done.",
  },
};

const IndexPage = (): JSX.Element => {
  const { t, isEnglishPage } = useTranslation(localeEs, localeEn);

  return (
    <Fragment>
      <Head>
        <title>Brandon García</title>
        <meta
          name="keywords"
          content="brandon, brandon garcia, brandongs, frontend developer, backend developer, freelance, software engineering, software engineering projects, create web apps, create mobile apps, create software"
        />
        <meta
          name="description"
          content="My name is Brandon, I am a computer systems engineering and I can help you to create your dream website, a scalable REST API or the best mobile app. If you are looking for a frontend developer, backend developer or mobile app developer, get in touch with me"
        />
      </Head>
      <Navbar />
      <Container maxWidth="md">
        <Grid container justifyContent="center" direction="column">
          <Grid item>
            <Box mt={3}>
              <Typography
                component={"h1"}
                variant={"h2"}
                align={"center"}
                gutterBottom
              >
                {t.title}
              </Typography>
              <Typography component={"p"} variant={"h6"} align={"justify"}>
                {t.description}
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box mt={3}>
              <Typography
                component={"h2"}
                variant={"h3"}
                align={"center"}
                gutterBottom
              >
                Backend
              </Typography>
              <Typography component={"p"} variant={"h6"} align={"justify"}>
                {t.backend.description}
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box mt={3}>
              <Typography
                component={"h2"}
                variant={"h3"}
                align={"center"}
                gutterBottom
              >
                Web
              </Typography>
              <Typography component={"p"} variant={"h6"} align={"justify"}>
                {t.web.description}
              </Typography>
              <Box mt={2}>
                <Carousel autoPlay={false} navButtonsAlwaysVisible>
                  {webItems.map((item, i) => (
                    <Item key={i} item={item} isEnglish={isEnglishPage} fw />
                  ))}
                </Carousel>
              </Box>
            </Box>
          </Grid>
          <Grid item>
            <Box mt={3}>
              <Typography
                component={"h2"}
                variant={"h3"}
                align={"center"}
                gutterBottom
              >
                {t.app.title}
              </Typography>
              <Typography component={"p"} variant={"h6"} align={"justify"}>
                {t.app.description}
              </Typography>
              <Box mb={8} mt={2}>
                <Carousel autoPlay={false} navButtonsAlwaysVisible>
                  {appItems.map((item, i) => (
                    <Item key={i} item={item} isEnglish={isEnglishPage} />
                  ))}
                </Carousel>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <BottomMenu />
    </Fragment>
  );
};

interface ItemProps {
  descriptionEn: string;
  descriptionEs: string;
  image: string;
}

function Item({
  item,
  isEnglish = true,
  fw = false,
}: {
  item: ItemProps;
  isEnglish?: boolean;
  fw?: boolean;
}) {
  const description = isEnglish ? item.descriptionEn : item.descriptionEs;

  return (
    <Paper style={{ height: fw ? 600 : 880, width: 800, margin: "0 auto" }}>
      <Grid container direction="column">
        <Grid container item justifyContent="center">
          <Box
            padding={0}
            style={{
              width: "100%",
              overflowX: "hidden",
              overflowY: "hidden",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={`/img/projects/almerimur/${item.image}`}
              style={{
                width: fw ? 800 : "auto",
                height: fw ? 440 : "100%",
                margin: "0 auto",
                objectFit: "cover",
              }}
            />
          </Box>
          <Grid item>
            <Box padding={3}>
              <Typography component={"p"} variant={"h6"} align={"justify"}>
                {description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default IndexPage;
