import { graphql, useStaticQuery } from 'gatsby';
import { SocialProfile } from 'gatsby-theme-portfolio-minimal/src/components/SocialProfiles';

interface AsistenciaSectionQueryResult {
    allAsistenciaJson: {
        sections: {
            description: string;
            email: string;
            name: string;
            socialProfiles: {
                from: SocialProfile[];
                showIcons: boolean;
            };
            button: {
                label: string;
                url: string;
                visible: boolean;
            };
        }[];
    };
}

export const useLocalDataSource = (): AsistenciaSectionQueryResult => {
    return useStaticQuery(graphql`
        query AsistenciaSectionQuery {
            allAsistenciaJson {
                sections: nodes {
                    description
                    email
                    name
                    socialProfiles {
                        from
                        showIcons
                    }
                    button {
                        label
                        url
                        visible
                    }
                }
            }
        }
    `);
};
