import React from 'react';
import { Animation, Section, } from 'gatsby-theme-portfolio-minimal';
import { SocialProfiles } from 'gatsby-theme-portfolio-minimal/src/components/SocialProfiles';
import { useLocalDataSource } from './data';
import { PageSection } from 'gatsby-theme-portfolio-minimal/src/types';
import { Button, ButtonType } from 'gatsby-theme-portfolio-minimal/src/components/Button';
import * as classes from './style.module.css';

export function AsistenciaSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const data = response.allAsistenciaJson.sections[0];

    //const data = {...contactdata, button};

    return (
        <Animation type="fadeUp">
            <Section anchor={props.sectionId} heading={props.heading} additionalClasses={[classes.Contact]}>
                {data.description && <p className={classes.Description}>{data.description}</p>}
                <div className={classes.Profile}>
                    <div className={classes.ContactDetails}>
                        <div className={classes.Name}>{data.name}</div>
                        <u>
                            <a href={`mailto:${data.email}`}>{data.email}</a>
                        </u>
                        {data.button !== undefined && data.button.visible !== false && (
                            <Animation className={classes.MoreProjects} type="fadeIn">
                                <Button
                                    type={ButtonType.LINK}
                                    externalLink={true}
                                    url={data.button.url}
                                    label={data.button.label}
                                />
                            </Animation>
                        )}
                    </div>
                </div>
                <hr/>
                {data.socialProfiles && (
                    <SocialProfiles from={data.socialProfiles.from} showIcon={data.socialProfiles.showIcons} />
                )}
            </Section>
        </Animation>
    );
}
