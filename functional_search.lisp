(defun linear-search (list item)
  (loop for pos from 0 and element in list
        when (eql item element)
          do (return pos)))
 
(write (linear-search '(1 3 6 67 56 22 33 39) 6))
