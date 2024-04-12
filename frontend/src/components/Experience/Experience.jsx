import React from 'react';
import userData from '../../constants/data';
import {
	ExperienceSection, ExperienceDiv, ExperienceTitle, TimelineContainer,
	TimelineDiv, TimelineContentDiv, TimelineContent, ExperienceContent,
	IconAfter, Span, Role, Text, TextLink, SpanLine
} from './ExperienceStyles';


const Experience = () => {
	return (
		<ExperienceSection>
			<ExperienceDiv>
				<ExperienceTitle>
					Experience
				</ExperienceTitle>

				<TimelineContainer>
					<TimelineDiv>
						<TimelineContentDiv>
							<TimelineContent>
								<IconAfter>
									<i className="icon-briefcase" />
								</IconAfter>
								<ExperienceContent>
									<Span>{userData.experience[0].year}</Span>
									<Role>{userData.experience[0].title}</Role>
									<Text>
										<TextLink href={userData.experience[0].companyLink}>
											{userData.experience[0].company}
										</TextLink>
										</Text>
									<Text>
										{userData.experience[0].desc}
									</Text>
								</ExperienceContent>

							</TimelineContent>
							
							<TimelineContent>
								<IconAfter>
									<i className="icon-briefcase" />
								</IconAfter>
								<ExperienceContent>
									<Span>{userData.experience[1].year}</Span>
									<Role>{userData.experience[1].title}</Role>
									<Text>
										<TextLink href={userData.experience[0].companyLink}>
											{userData.experience[1].company}
										</TextLink>
										</Text>
									<Text>
										{userData.experience[1].desc}
									</Text>
								</ExperienceContent>
							</TimelineContent>

							<TimelineContent>
								<IconAfter>
									<i className="icon-briefcase" />
								</IconAfter>
								<ExperienceContent>
									<Span>{userData.experience[2].year}</Span>
									<Role>{userData.experience[2].title}</Role>
									<Text>
										<TextLink href={userData.experience[2].companyLink}>
											{userData.experience[2].company}
										</TextLink>
										</Text>
									<Text>
										{userData.experience[2].desc}
									</Text>
								</ExperienceContent>
							</TimelineContent>
							<SpanLine />
						</TimelineContentDiv>
					</TimelineDiv>

					<TimelineDiv>
						<TimelineContentDiv>
							<TimelineContent>
								<IconAfter>
									<i className="icon-briefcase" />
								</IconAfter>
								<ExperienceContent>
									<Span>{userData.experience[3].year}</Span>
									<Role>{userData.experience[3].title}</Role>
									<Text>
										<TextLink href={userData.experience[3].companyLink}>
											{userData.experience[3].company}
										</TextLink>
										</Text>
									<Text>
										{userData.experience[3].desc}
									</Text>
								</ExperienceContent>
							</TimelineContent>
							<TimelineContent>
								<IconAfter>
									<i className="icon-briefcase" />
								</IconAfter>
								<ExperienceContent>
									<Span>{userData.experience[4].year}</Span>
									<Role>{userData.experience[4].title}</Role>
									<Text>
										<TextLink href={userData.experience[4].companyLink}>
											{userData.experience[4].company}
										</TextLink>
										</Text>
									<Text>
										{userData.experience[4].desc}
									</Text>
								</ExperienceContent>
							</TimelineContent>
							
							<TimelineContent>
								<IconAfter>
									<i className="icon-graduation" />
								</IconAfter>
								<ExperienceContent>
									<Span>{userData.experience[5].year}</Span>
									<Role>{userData.experience[5].title}</Role>
									<Text>
										<TextLink href={userData.experience[5].companyLink}>
											{userData.experience[5].company}
										</TextLink>
										</Text>
									<Text>
										{userData.experience[5].desc}
									</Text>
								</ExperienceContent>
							</TimelineContent>

							<SpanLine />
						</TimelineContentDiv>
					</TimelineDiv>
				</TimelineContainer>
			</ExperienceDiv>
		</ExperienceSection>
	);
};

export default Experience;