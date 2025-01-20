import { Container } from 'inversify'
import { AboutRepositoryImpl } from './infrastracture/persistence/about-repository-impl'
import { ProjectRepositoryImpl } from './infrastracture/persistence/project-repository-impl'
import { FetchIntroductionUseCase } from './application/usecases/about_usecases/fetch-introduction-usecase'
import { FetchInitialAboutUseCase } from './application/usecases/about_usecases/fetch-initial-about-usecase'
import { FetchEducationUseCase } from './application/usecases/about_usecases/fetch-education-usecase'
import { FetchWorkUseCase } from './application/usecases/about_usecases/fetch-work-usecase'
import { FetchCertificatesUseCase } from './application/usecases/about_usecases/fetch-certificates-usecase'
import { FetchSkillsUseCase } from './application/usecases/about_usecases/fetch-skills-usecase'
import { FetchContactsUseCase } from './application/usecases/about_usecases/fetch-contacts-usecase'
import { FetchResumesUseCase } from './application/usecases/about_usecases/fetch-resumes-usecase'
import { FetchRecentProjectsUseCase } from './application/usecases/project_usecases/fetch-recent-projects-usecase'
import { FetchHighlightProjectsUseCase } from './application/usecases/project_usecases/fetch-highlight-projects-usecase'
import { FetchProjectsUseCase } from './application/usecases/project_usecases/fetch-projects-usecase'
import { FetchProjectDetailUseCase } from './application/usecases/project_usecases/fetch-project-detail-usecase'
import { TYPES } from './composables/types'
import { FetchProjectTitleListUseCase } from './application/usecases/project_usecases/fetch-project-title-list-usecase'

const container = new Container()

container.bind(TYPES.AboutRepository).to(AboutRepositoryImpl)
container.bind(TYPES.FetchIntroductionUseCase).to(FetchIntroductionUseCase)
container.bind(TYPES.FetchInitialAboutUseCase).to(FetchInitialAboutUseCase)
container.bind(TYPES.FetchEducationUseCase).to(FetchEducationUseCase)
container.bind(TYPES.FetchWorkUseCase).to(FetchWorkUseCase)
container.bind(TYPES.FetchCertificatesUseCase).to(FetchCertificatesUseCase)
container.bind(TYPES.FetchSkillsUseCase).to(FetchSkillsUseCase)
container.bind(TYPES.FetchContactsUseCase).to(FetchContactsUseCase)
container.bind(TYPES.FetchResumesUseCase).to(FetchResumesUseCase)

container.bind(TYPES.ProjectRepository).to(ProjectRepositoryImpl)
container.bind(TYPES.FetchRecentProjectsUseCase).to(FetchRecentProjectsUseCase)
container.bind(TYPES.FetchHighlightProjectsUseCase).to(FetchHighlightProjectsUseCase)
container.bind(TYPES.FetchProjectsUseCase).to(FetchProjectsUseCase)
container.bind(TYPES.FetchProjectTitleListUseCase).to(FetchProjectTitleListUseCase)
container.bind(TYPES.FetchProjectDetailUseCase).to(FetchProjectDetailUseCase)

export { container }
