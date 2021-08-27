//NextJs components
import Image from 'next/image';
import Link from 'next/link';

//Icons
import { FaArrowLeft } from 'react-icons/fa';

//Custom components
import Layout from '../components/layout';
import LinkButton from '../components/link-button';

//Image imports
import mern from '../public/images/case-study/mern.jpg';
import postman from '../public/images/case-study/postman.png';
import privateRouteCode from '../public/images/case-study/private-route-code.png';
import movieView from '../public/images/case-study/movie-view.png';

//Styling
import styles from '../styles/CaseStudy.module.css';

export default function CaseStudy() {
  return (
    <Layout title="theMovieBook Case Study">
      <div className={styles.caseStudyContainer}>
        <Link href="/#projects">
          <a>
            <FaArrowLeft /> Back to Projects
          </a>
        </Link>

        <section className={styles.section}>
          <div className={styles.sectionContainer}>
            <div className={styles.textContainer}>
              <h2>Overview</h2>
              <div>
                <p>
                  theMovieBook is a single page web app built using the MERN
                  tech stack. The app provides users with information regarding
                  a small selection of movies, including their descriptions,
                  directors and genres, and allows users to register and
                  favorite movies of their choosing. This project was developed
                  as part of the CareerFoundry Full-Stack Immersion course to
                  build familiarity with databases, RESTful APIs, and front-end
                  frameworks, as well as to promote the use of definite articles
                  in the naming of digital products.
                </p>
              </div>
            </div>

            <div className={styles.imageContainer}>
              <Image src={mern} alt="MongoDB, Express, React, Node" />
            </div>
          </div>
        </section>

        <section>
          <section className={styles.section}>
            <div className={`${styles.sectionContainer} ${styles.rowReverse}`}>
              <div className={styles.textContainer}>
                <h2>Approach</h2>
                <h3>Back-End</h3>
                <p>
                  Work on this project began with building its database. For
                  this, I chose to use MongoDB as the relatively small scale of
                  the project meant that strict foreign key relations wouldn’t
                  be necessary and the ability to embed documents meant that we
                  wouldn’t require additional queries to display genre or
                  director data in our app.
                </p>
                <p>
                  I then proceeded with work on the RESTful API that would
                  become the backbone of the entire app using Express and
                  Node.js. This is where the biggest hurdle in the backend of
                  the project reared its head: designing the endpoints for my
                  API. The concern here was in determining what routes would
                  fully cover all the functionality of my app. As we are using a
                  non-relational database with embedded documents, we are
                  theoretically able to create routes for retrieving just user
                  and movie info with some PUT and POST routes for modifying the
                  data stored. In the end, I decided to go beyond what’s
                  required for the product so as to further practice developing
                  business logic and working with Express.
                </p>
                <LinkButton
                  link={{
                    type: 'Misc',
                    name: 'Documentation',
                    url: 'https://ryrojas.github.io/themoviebook-api/docs/',
                  }}
                />
              </div>

              <div className={styles.imageContainer}>
                <Image src={postman} alt="Image of API routes in Postman" />
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionContainer}>
              <div className={styles.textContainer}>
                <h3>Front-End</h3>
                <p>
                  theMovieBook’s front-end was built with React as our
                  framework, with React Router, React Redux, and React Bootstrap
                  to respectively handle app routing, state handling, and
                  styling. The client application allows users to register,
                  login, view and edit their profiles, view and filter a list of
                  movies, and view a details page for user-selected
                  movies/genres/directors. Working on this portion was truly a
                  joy with how easy it is to use React, writing everything in
                  JavaScript and managing smaller components as opposed to
                  entire html files. However, in developing the routing and
                  authentication for the application, I did find I was
                  duplicating code for each route which was less than ideal.
                  Ultimately, I solved this problem by implementing a higher
                  order component that simply ran an authentication check and
                  then rendered the child component. This provided an additional
                  benefit where I could also check whether the global movie
                  state was populated and render out a loading spinner when
                  necessary, as well as providing for significantly cleaner,
                  more maintainable code.
                </p>
              </div>
              <div className={styles.imageContainer}>
                <Image
                  src={privateRouteCode}
                  alt="Code for private route component."
                />
              </div>
            </div>
          </section>
        </section>

        <section className={styles.section}>
          <div className={`${styles.sectionContainer} ${styles.rowReverse}`}>
            <div className={styles.textContainer}>
              <h2>Conclusion</h2>
              <p>
                This was a great project to work on that really brought into
                focus for me how much I enjoy working programmatically. It was
                great having both sides of this application running in the same
                language as there was less mental overhead and inertia in having
                to switch my way of thinking when switching between the two. I
                look forward to continuing to work with React and I plan to
                expand my horizons and see how other front-end frameworks have
                implemented similar functionality.
              </p>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src={movieView}
                alt="Screenshot of movie view of live app."
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
