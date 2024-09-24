import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './content-list1.css'

const ContentList1 = (props) => {
  return (
    <div className="content-list1-container thq-section-padding">
      <div className="content-list1-max-width thq-section-max-width">
        <div className="content-list1-content thq-flex-column">
          <ul className="content-list1-ul thq-flex-column">
            <li className="thq-flex-column list-item">
              <h2>
                {props.heading1 ?? (
                  <Fragment>
                    <h2 className="content-list1-text2 thq-heading-2">
                      Privacy statement
                    </h2>
                  </Fragment>
                )}
              </h2>
              <p>
                {props.content1 ?? (
                  <Fragment>
                    <p className="content-list1-text5 thq-body-small">
                      Lorem ipsum dolor sit amet. Vel dolores illum est aperiam
                      quis nam voluptatem quia et omnis autem qui dolore ullam
                      sed fugiat cumque! Qui accusamus assumenda et molestias
                      eius et error sunt. Id recusandae nostrum ea officiis
                      voluptatem in nisi consequatur sed quia tenetur sit alias
                      molestias qui illum soluta. Est nesciunt perferendis eum
                      sint rerum 33 cupiditate dolorem id corrupti laboriosam ut
                      debitis veniam ut ipsam fugit vel sunt consequatur. Et
                      nobis quasi et cumque adipisci aut molestiae eligendi quo
                      inventore dicta ea suscipit sequi sed veritatis nemo.
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3>
                {props.heading2 ?? (
                  <Fragment>
                    <h3 className="content-list1-text1 thq-heading-3">
                      Types of data we collect
                    </h3>
                  </Fragment>
                )}
              </h3>
              <p>
                {props.content2 ?? (
                  <Fragment>
                    <p className="content-list1-text8 thq-body-small">
                      Lorem ipsum dolor sit amet. Nam nihil facilis sit
                      consequuntur internos qui minima rerum ut molestias
                      laudantium aut iusto deserunt. Aut voluptatibus excepturi
                      qui officia laudantium est repellendus tempore hic sunt
                      debitis. Ut galisum tempore in enim fugit eum pariatur
                      possimus est tenetur nemo et sint sint et dolores Quis.
                      Aut illum perspiciatis rem architecto culpa et fuga
                      aliquid. Est omnis praesentium ut nisi internos rem quod
                      totam et similique quis. Est tempore cumque aut recusandae
                      labore qui error molestiae et possimus quia! Eum Quis
                      asperiores non nihil tempora qui quia voluptatem aut
                      aspernatur aspernatur aut asperiores labore et sapiente
                      quaerat qui suscipit quia. Ea nesciunt iste aut temporibus
                      culpa sit dignissimos quaerat eum architecto voluptatum et
                      nemo velit At harum harum.
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3>
                {props.heading3 ?? (
                  <Fragment>
                    <h3 className="content-list1-text7 thq-heading-3">
                      How we use your data
                    </h3>
                  </Fragment>
                )}
              </h3>
              <p>
                {props.content3 ?? (
                  <Fragment>
                    <p className="content-list1-text3 thq-body-small">
                      Lorem ipsum dolor sit amet. Est vitae blanditiis ab
                      aliquam tempore aut ipsam iusto in sunt repellat ex
                      voluptatum inventore ab facilis galisum ea consequatur
                      consequuntur. Ab voluptas voluptatem eum consequatur
                      aspernatur non laboriosam atque est labore asperiores a
                      neque quos. Ea nemo modi hic dicta saepe et veritatis
                      maiores At praesentium aliquid. Sed dolores architecto non
                      doloribus quia eos consectetur commodi non tenetur vitae
                      est neque omnis. Non perspiciatis velit At aliquam rerum
                      ut officiis ipsa id minima eius ut sapiente nobis et nemo
                      neque. Aut maiores tempora in officiis sunt eum voluptatem
                      tenetur sit iste reprehenderit ea nisi dolor. Ea impedit
                      omnis ad internos autem ut esse sunt ad saepe maiores vel
                      perferendis veritatis. Ex magni fugiat ut reprehenderit
                      laudantium sit galisum ipsam eos tempora doloribus sed
                      accusantium nobis eum praesentium quod.
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3>
                {props.heading4 ?? (
                  <Fragment>
                    <h3 className="content-list1-text4 thq-heading-3">
                      Sharing your data with 3rd parties
                    </h3>
                  </Fragment>
                )}
              </h3>
              <p>
                {props.content4 ?? (
                  <Fragment>
                    <p className="content-list1-text6 thq-body-small">
                      Lorem ipsum dolor sit amet. Id galisum officiis rem quod
                      internos qui provident quaerat hic minus eveniet est
                      officiis galisum sit rerum dignissimos. Sit voluptatem
                      alias et veniam rerum ea quod ipsam ut quam neque est
                      nihil repellat est aspernatur voluptatem est voluptas
                      ratione? Ea vero tempore At soluta temporibus 33 galisum
                      excepturi quo modi distinctio. Qui dolor soluta sit ipsam
                      vitae et suscipit molestiae est consequatur galisum aut
                      sapiente voluptatem sed quas eaque et minima minus? Rem
                      soluta consequatur et velit cupiditate sed eligendi
                      laudantium rem pariatur galisum sit mollitia debitis eum
                      delectus ipsum aut consequatur mollitia. Qui voluptatibus
                      molestias ut totam Quis ea unde dolorem sit animi eveniet
                      et galisum explicabo. Est culpa error ut voluptatibus
                      voluptatem qui dignissimos dolorem quo laborum distinctio
                      qui omnis perspiciatis ab facilis temporibus qui
                      perspiciatis consectetur. Ab praesentium fugiat eos
                      veritatis quam ex modi autem et sapiente dolorem?
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item"></li>
            <li className="list-item"></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ContentList1.defaultProps = {
  heading2: undefined,
  heading1: undefined,
  content3: undefined,
  heading4: undefined,
  content1: undefined,
  content4: undefined,
  heading3: undefined,
  content2: undefined,
}

ContentList1.propTypes = {
  heading2: PropTypes.element,
  heading1: PropTypes.element,
  content3: PropTypes.element,
  heading4: PropTypes.element,
  content1: PropTypes.element,
  content4: PropTypes.element,
  heading3: PropTypes.element,
  content2: PropTypes.element,
}

export default ContentList1
