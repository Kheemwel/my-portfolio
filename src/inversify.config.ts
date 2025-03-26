import { Container } from 'inversify'
import { AboutRepositoryImpl } from './infrastracture/persistence/about-repository-impl'
import { FetchIntroductionUseCase } from './application/usecases/about_usecases/fetch-introduction-usecase'
import { FetchCertificatesUseCase } from './application/usecases/about_usecases/fetch-certificates-usecase'
import { FetchContactsUseCase } from './application/usecases/about_usecases/fetch-contacts-usecase'
import { FetchEducationUseCase } from './application/usecases/about_usecases/fetch-education-usecase'
import { FetchInitialAboutUseCase } from './application/usecases/about_usecases/fetch-initial-about-usecase'
import { FetchResumesUseCase } from './application/usecases/about_usecases/fetch-resumes-usecase'
import { FetchSkillsUseCase } from './application/usecases/about_usecases/fetch-skills-usecase'
import { FetchWorkUseCase } from './application/usecases/about_usecases/fetch-work-usecase'
import { FetchHighlightProjectsUseCase } from './application/usecases/project_usecases/fetch-highlight-projects-usecase'
import { FetchProjectDetailUseCase } from './application/usecases/project_usecases/fetch-project-detail-usecase'
import { FetchProjectTitleListUseCase } from './application/usecases/project_usecases/fetch-project-title-list-usecase'
import { FetchProjectsUseCase } from './application/usecases/project_usecases/fetch-projects-usecase'
import { FetchRecentProjectsUseCase } from './application/usecases/project_usecases/fetch-recent-projects-usecase'
import { ProjectRepositoryImpl } from './infrastracture/persistence/project-repository-impl'
import { TYPES } from './composables/types'
import type { AboutRepository } from './domain/repositories/i-about-repository'
import type { ConfigRepository } from './domain/repositories/i-config-repository'
import { ConfigRepositoryImpl } from './infrastracture/persistence/config-repository-impl'
import { FetchConfigUseCase } from './application/usecases/config_usecases/fetch-config-usecase'

const container = new Container()

container.bind<AboutRepository>(TYPES.AboutRepository).to(AboutRepositoryImpl)
container.bind<FetchIntroductionUseCase>(TYPES.FetchIntroductionUseCase).to(FetchIntroductionUseCase)
container.bind<FetchInitialAboutUseCase>(TYPES.FetchInitialAboutUseCase).to(FetchInitialAboutUseCase)
container.bind<FetchEducationUseCase>(TYPES.FetchEducationUseCase).to(FetchEducationUseCase)
container.bind<FetchWorkUseCase>(TYPES.FetchWorkUseCase).to(FetchWorkUseCase)
container.bind<FetchCertificatesUseCase>(TYPES.FetchCertificatesUseCase).to(FetchCertificatesUseCase)
container.bind<FetchSkillsUseCase>(TYPES.FetchSkillsUseCase).to(FetchSkillsUseCase)
container.bind<FetchContactsUseCase>(TYPES.FetchContactsUseCase).to(FetchContactsUseCase)
container.bind<FetchResumesUseCase>(TYPES.FetchResumesUseCase).to(FetchResumesUseCase)

container.bind<ProjectRepositoryImpl>(TYPES.ProjectRepository).to(ProjectRepositoryImpl)
container.bind<FetchRecentProjectsUseCase>(TYPES.FetchRecentProjectsUseCase).to(FetchRecentProjectsUseCase)
container.bind<FetchHighlightProjectsUseCase>(TYPES.FetchHighlightProjectsUseCase).to(FetchHighlightProjectsUseCase)
container.bind<FetchProjectsUseCase>(TYPES.FetchProjectsUseCase).to(FetchProjectsUseCase)
container.bind<FetchProjectTitleListUseCase>(TYPES.FetchProjectTitleListUseCase).to(FetchProjectTitleListUseCase)
container.bind<FetchProjectDetailUseCase>(TYPES.FetchProjectDetailUseCase).to(FetchProjectDetailUseCase)

container.bind<ConfigRepository>(TYPES.ConfigRepository).to(ConfigRepositoryImpl)
container.bind<FetchConfigUseCase>(TYPES.FetchConfigUseCase).to(FetchConfigUseCase)

export { container }
